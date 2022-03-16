$(document).ready(function () {
  let total = 0;
  let newTotal = 0;
  const $btn1 = $("#btn1");
  const buttonsArray = [
    "#btn1",
    "#btn2",
    "#btn3",
    "#btn4",
    "#btn5",
    "#btn6",
    "#btn7",
  ];
  const content = [
    "FullStack of pancakes",
    "API platter",
    "Opensource Sandwich",
    "Fri-Data",
    "Camel Case-role",
    "Arctic VARCHAR",
    "Arctic Cookies",
  ];
  const cost = [4.99, 6.5, 7.87, 5.0, 8.5, 2.25, 3.14];
  const emojis = ["🥞", "🍽️", "🥪", "🍟", "🍞", "🥬", "🍪"];
  for (let i = 0; i < buttonsArray.length; i++) {
    $(buttonsArray[i]).on("click", function (e) {
      const idNumber = i + 1;
      const $li = `<div class="order1" id="${"order-" + idNumber}"> <p>${
        content[i]
      }</p> <p>${emojis[i]}</p> <p>$${cost[i].toFixed(
        2
      )}</p> <button class="button-31">Delete</button> </div>`;
      $(".order-list").append($li);
      total += cost[i];
      // total = total.toFixed(2);
      $(".total").text(`$${total.toFixed(2)}`);

      $(".order1").on("click", function (e) {
        e.stopImmediatePropagation();
        $(this).remove();
        newTotal = total - cost[i];
        total = newTotal;
        $(".total").text(`$${total.toFixed(2)}`);
      });
    });
  }

  $(".place-order").on("click", function (e) {
    console.log("button clicked");
    sendMessage();
  });

  function sendMessage() {
    $.ajax({
      type: "POST",
      url: "/menu/message",
      data: {
        body: "hello",
        messagingServiceSid: "MGe5d4ed39a658a6df660126841e26a05f",
        to: "+14039934171",
      },
    })
      .then((result) => {})
      .catch((err) => {});
  }
});
