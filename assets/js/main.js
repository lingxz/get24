$(document).ready(function(){
  setTimeout(function(){
      $('.odometer').each(function(i, obj) {
        $(obj).html(getRandomInt(1, 10))
      })
  }, 300);
  $("#changeNumbers").click(function () {
    setTimeout(function(){
      $('.odometer').each(function(i, obj) {
        $(obj).html(getRandomInt(1, 10))
      })
    }, 300);
  });

  $("#showAnswer").click(function () { 
    var numbers = [];
    $('.number__item').each(function() {
      numbers.push(parseInt($(this).text().replace('\n', '')))
    })
    var ans = solve(numbers);
    if (ans) {
      $('.answer').html(ans);
    } else {
      $('.answer').html("Oops, there seems to be no solution to this.")
    }
  });

  // $('#player-solution-form').on('submit', function(e) {
  //   alert("hello");
  //   e.preventDefault();
  //   var expr = $('#player-solution').val();
  //   console.log(expr);
  //   // var res = math.eval(expr);
  //   // alert(res);
  //   return false;
  // })

  $("#player-solution").on('keyup', function (e) {
    var expr = $('#player-solution').val();
    var numbers = [];
    $('.number__item').each(function() {
      numbers.push(parseInt($(this).text().replace('\n', '')).toString())
      // numbers.push(parseInt($(this).text()).toString())
    })
    if (e.keyCode == 13) {
      var msg;
      if (checkNumbers(numbers, expr)) {
        try {
          var res = math.eval(expr);
          if (res == 24) {
            msg = "Great, you got it!";
          } else {
            msg = "That's not 24, unfortunately."
          }
        } catch(err) {
          msg = "Your expression is invalid!"
        }
      } else {
        msg = "You need to use each number once and only once!";
      }
      $('.notification-banner').html(msg);
    }
  });
});
