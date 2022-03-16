/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const client = require('twilio')('AC5afee5d9e3ca0c72f8822021269a9f71', '36ba2eb2298bdcc630e7f324a28481ad');

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("menu")
  //   db.query(`SELECT * FROM users;`)
  //     .then(data => {
  //       const users = data.rows;
  //       res.json({ users });
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
   });
   router.post("/message",(req,res) => {
     const{ body, messagingServiceSid, to  } = req.body;
     console.log(req.body)

    client.messages
    .create({
      body,
      messagingServiceSid,
      to
     })
    .then(message => console.log(message.sid))
    .done();
    return res.json({response: 'message successful'})

   });
  return router;
};
