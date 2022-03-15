$(document).ready(function(){
  let total = 0;
  let newTotal = 0;
  const $btn1 = $("#btn1")
  const buttonsArray = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5", "#btn6", "#btn7"];
  const content = ["FullStack of pancakes", "API platter", "Opensource Sandwich", "Fri-Data", "Camel Case-role", "Arctic VARCHAR", "Arctic Cookies"]
  const cost = [4.99, 6.50, 7.87, 5.00, 8.50, 2.25, 3.14]
  const emojis = ["🥞", "🍽️", "🥪", "🍟", "🍞", "🥬", "🍪"]
  for (let i = 0; i < buttonsArray.length; i++) {
    $(buttonsArray[i]).on("click", function (e) {
      // e.stopPropagation()
      // e.stopImmediatePropagation()
      console.log(`button ${i + 1} clicked`);
      const idNumber = i + 1;
      const $li = `<div class="order1" id="${'order-' + idNumber}"> <p>${content[i]}</p> <p>${emojis[i]}</p> <p>$${cost[i]}</p> <button class="button-31">Delete</button> </div>`
      $(".order-list").append($li)
      total += cost[i];
      $(".total").text(`$${total}`)

      $(".order1").on("click", function (e) {
        // alert($(this).attr("id"));
        // e.stopPropagation()
        e.stopImmediatePropagation()
        $(this).remove()
        newTotal = total - cost[i];
        total = newTotal;
        console.log("button clicked")
        $(".total").text(`$${total}`)
      })
    });
  }

  // $(".order1").on("click", function (e) {
  //   alert($(this).attr("id"));
  // })

  // $("#btn1").on("click", function (e) {
  //   console.log("button 1 clicked");
  //   const $li = `<div class="order1" id="order-1"> <p>FullStack of pancakes</p> <p>🥞</p> <p>cost</p> <button class="button-31">Delete</button> </div>`
  //   $(".order-list").append($li)
  // });


  // $("#btn2").on("click", function (e) {
  //   console.log("button 2 clicked");
  //   const $li = `<div class="order1" id="order-2"> <p>API platter</p> <p>🍽️</p> <p>cost</p> <button class="button-31">Delete</button> </div>`
  //   $(".order-list").append($li)
  // });

  // $("#btn3").on("click", function (e) {
  //   console.log("button 3 clicked");
  //   const $li = `<div class="order1" id="order-3"> <p>Opensource Sandwich</p> <p>🥪</p> <p>cost</p> <button class="button-31">Delete</button> </div>`
  //   $(".order-list").append($li)
  // });

  // $("#btn4").on("click", function (e) {
  //   console.log("button 4 clicked");
  //   const $li = `<div class="order1" id="order-4"> <p>Fri-Data</p> <p>🍟</p> <p>cost</p> <button class="button-31">Delete</button> </div>`
  //   $(".order-list").append($li)
  // });

  // $("#btn5").on("click", function (e) {
  //   console.log("button 5 clicked");
  //   const $li = `<div class="order1" id="order-5"> <p>Camel Case-role</p> <p>🍞</p> <p>cost</p> <button class="button-31">Delete</button> </div>`
  //   $(".order-list").append($li)
  // });

  // $("#btn6").on("click", function (e) {
  //   console.log("button 6 clicked");
  //   const $li = `<div class="order1" id="order-6"> <p>Arctic VARCHAR</p> <p>🥬</p> <p>cost</p> <button class="button-31">Delete</button> </div>`
  //   $(".order-list").append($li)
  // });

  // $("#btn7").on("click", function (e) {
  //   console.log("button 7 clicked");
  //   const $li = `<div class="order1" id="order-7"> <p>Arctic Cookies</p> <p>🍪</p> <p>cost</p> <button class="button-31">Delete</button> </div>`
  //   $(".order-list").append($li)
  // });

});

