$(document).ready(function(){
  const $btn1 = $("#btn1")

  $("#btn1").on("click", function (e) {
    console.log("button 1 clicked");
    const $li = $('<li>').text("FullStack of pancakes")
    $(".order-list").append($li)
  });

  $("#btn2").on("click", function (e) {
    console.log("button 2 clicked");
    const $li = $('<li>').text("API platter")
    $(".order-list").append($li)
  });

  $("#btn3").on("click", function (e) {
    console.log("button 3 clicked");
  });

  $("#btn4").on("click", function (e) {
    console.log("button 4 clicked");
  });

  $("#btn5").on("click", function (e) {
    console.log("button 5 clicked");
  });

  $("#btn6").on("click", function (e) {
    console.log("button 6 clicked");
  });

  $("#btn7").on("click", function (e) {
    console.log("button 7 clicked");
  });



});

