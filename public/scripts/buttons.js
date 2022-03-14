$(document).ready(function(){
  const $btn1 = $("#btn1")

  $("#btn1").on("click", function (e) {
    console.log("button 1 clicked");
    const $li = `<div class="order1"> <p>FullStack of pancakes</p> <p>🥞</p> <p>cost</p> </div>`
    $(".order-list").append($li)
  });


  $("#btn2").on("click", function (e) {
    console.log("button 2 clicked");
    const $li = $('<li>').text("API platter")
    $(".order-list").append($li)
  });

  $("#btn3").on("click", function (e) {
    console.log("button 3 clicked");
    const $li = $('<li>').text("OpenSource Sandwich")
    $(".order-list").append($li)
  });

  $("#btn4").on("click", function (e) {
    console.log("button 4 clicked");
    const $li = $('<li>').text("Fri-Data")
    $(".order-list").append($li)
  });

  $("#btn5").on("click", function (e) {
    console.log("button 5 clicked");
    const $li = $('<li>').text("Camel Case-role")
    $(".order-list").append($li)
  });

  $("#btn6").on("click", function (e) {
    console.log("button 6 clicked");
    const $li = $('<li>').text("Arctic VARCHAR")
    $(".order-list").append($li)
  });

  $("#btn7").on("click", function (e) {
    console.log("button 7 clicked");
    const $li = $('<li>').text("Cookies")
    $(".order-list").append($li)
  });



});

