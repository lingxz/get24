let config = {
  non: 4,
  lower_limit: 0,
  upper_limit: 10,
  target: 24,
}

function populate_config() {
  document.getElementById("non").innerHTML = config.non;
  document.getElementsByName("lower-limit")[0].value = config.lower_limit;
  document.getElementsByName("upper-limit")[0].value = config.upper_limit;
  document.getElementsByName("target")[0].value = config.target;
}

function modify_config() {
  config.lower_limit = parseFloat(document.getElementsByName("lower-limit")[0].value);
  config.upper_limit = parseFloat(document.getElementsByName("upper-limit")[0].value);
  config.target = parseFloat(document.getElementsByName("target")[0].value);
}

function increase_non() {
  config.non += 1
  document.getElementById("non").innerHTML = config.non;
  var node = document.createElement("input");
  node.classList.add("number");
  node.value = 0
  node.type = "number"
  document.getElementsByClassName("numbers")[0].append(" ");
  document.getElementsByClassName("numbers")[0].append(node);
}

function decrease_non() {
  config.non -= 1
  document.getElementById("non").innerHTML = config.non;
  let numbers = document.getElementsByClassName("numbers")[0];
  numbers.removeChild(numbers.lastElementChild);
}

function solve_wrap() {
  var n_html = document.getElementsByClassName("number");
  let numbers = [];
  for (var i = 0; i < n_html.length; i++) {
    numbers.push(parseFloat(n_html[i].value));
  }
  const ans = solve(numbers, config.target)
  if (ans) {
    document.getElementById('answer').innerHTML = ans
  } else {
    document.getElementById('answer').innerHTML = "no solution"
  }
}

function generate_new() {
  var n_html = document.getElementsByClassName("number");
  let solved = false
  while (solved === false) {
    var numbers = [];
    for (var i = 0; i < n_html.length; i++) {
      numbers.push(random_int(0, 10))
    }
    solved = solve(numbers)
  }
  for (var i = 0; i < n_html.length; i++) {
    n_html[i].value = numbers[i]
  }
  // clear answer div
  document.getElementById('answer').innerHTML = ""
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toggle_config() {
  var x = document.getElementById("config");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

(function() {
  populate_config();
  generate_new();
})();
