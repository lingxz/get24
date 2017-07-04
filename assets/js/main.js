$(document).ready(function(){
  setTimeout(function(){
      $('.odometer').each(function(i, obj) {
        $(obj).html(getRandomInt(1, 10))
      })
  }, 300);
  $("#changeNumbers").click(function () {
    $('.answer').text('');
    $('.notification-banner').text('');
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
  $("#solve-numbers").on('keyup', function (e) {
    var n = parseInt($("#solve-numbers").val());
    var form = $('#numbers-to-solve');
    if (n) {
      $('.numbers-title').text('Numbers');
    } else {
      $('.numbers-title').empty();
    }
    form.empty();
    var input = "<input type='number' name='number' class='number-element' />";
    var button = "<button id='solve-specific'>Solve for me!</button>"
    for (var i = 0; i < n; i++ ) {
      form.append(input)
    }
    if (n) {
      form.append(button)
    }
  });

  $(document).on('click', '#solve-specific', function(e){
    e.preventDefault();
    var numbers = [];
    $('input.number-element').each(function() {
      numbers.push(parseInt($(this).val()))
    })
    var goal = parseInt($('#solve-goal').val())
    console.log(goal);
    console.log(numbers);
    var ans = solve(numbers, goal, []);
    console.log(ans);
    if (ans) {
      $('.solve-answer').html(ans + ' = ' + goal.toString());
    } else {
      $('.solve-answer').html("Oops, there seems to be no solution to this.")
    }
  });

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
