$(document).ready(function(){

  const $btn1 = $("#btn1")
  let total = 0

  $("#btn1").on("click", function (e) {
    console.log("button 1 clicked");
    const $li = `<div class="order1"> <p>FullStack of pancakes</p> <p>🥞</p> <p>$4.99</p> </div>`
    $(".order-list").append($li)
    total += 4.99;
    $(".total").text(`$${total}`)
  });


  $("#btn2").on("click", function (e) {
    console.log("button 2 clicked");
    const $li = `<div class="order1"> <p>API platter</p> <p>🍽️</p> <p>$6.50</p> </div>`
    $(".order-list").append($li)
    total += 6.50;
    $(".total").text(`$${total}`)
  });

  $("#btn3").on("click", function (e) {
    console.log("button 3 clicked");
    const $li = `<div class="order1"> <p>Opensource Sandwich</p> <p>🥪</p> <p>$7.87</p> </div>`
    $(".order-list").append($li)
    total += 7.87;
    $(".total").text(`$${total}`)
  });

  $("#btn4").on("click", function (e) {
    console.log("button 4 clicked");
    const $li = `<div class="order1"> <p>Fri-Data</p> <p>🍟</p> <p>$5.00</p> </div>`
    $(".order-list").append($li)
    total += 5.00;
    $(".total").text(`$${total}`)
  });

  $("#btn5").on("click", function (e) {
    console.log("button 5 clicked");
    const $li = `<div class="order1"> <p>Camel Case-role</p> <p>🍞</p> <p>$8.50</p> </div>`
    $(".order-list").append($li)
    total += 8.50;
    $(".total").text(`$${total}`)
  });

  $("#btn6").on("click", function (e) {
    console.log("button 6 clicked");
    const $li = `<div class="order1"> <p>Arctic VARCHAR</p> <p>🥬</p> <p>$2.25</p> </div>`
    $(".order-list").append($li)
    total += 2.25;
    $(".total").text(`$${total}`)
  });

  $("#btn7").on("click", function (e) {
    console.log("button 7 clicked");
    const $li = `<div class="order1"> <p>Arctic Cookies</p> <p>🍪</p> <p>$3.14</p> </div>`
    $(".order-list").append($li)
    total += 3.14;
    $(".total").text(`$${total}`)
  });

});

