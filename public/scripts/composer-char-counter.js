//  document.ready(function() {
// console.log('This is working if you see me');
// });


$(document).ready(function () {
  var counter = $('.counter');
  var tweet = $("textarea[name=text]");
  tweet.on('input', function (event) {
    counterNum = (140 - event.target.value.length);
    counter.text(counterNum);


    var color = 'black';
    if (counterNum < 0) {
      color = 'red';
    }
counter.css({color: color});
  });
});







// console.log(counter);
// var color = 'black';
// if (counterNum < 0) {
  // color = 'red';
// } 
// counter.css({color: color});










  /////////////////////////////////////////////////////////////////



  // console.log(event);
    // function selectText () {
    // var textBox = document.querySelector("textarea");
    // console.log(textBox.value.length);
    // }
    // selectText();


    ///////////////////////////////////////

    // var textCount = document.querySelector("#textCount");
    // console.log(textCount);
  // });
