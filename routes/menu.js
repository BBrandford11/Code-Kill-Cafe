/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const number = process.env.myNumber;

const client = require('twilio')(accountSid, authToken);

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("menu");
  });
  router.post("/message", (req, res) => {
    const { body, messagingServiceSid } = req.body;
    console.log(req.body);

    client.messages
      .create({
        body,
        messagingServiceSid,
        to: number,
      })
      .then((message) => console.log(message.sid))
      .done();
    return res.json({ response: "message successful" });
  });
  return router;
};
