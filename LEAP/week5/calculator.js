let number;

function onClick() {
  if (number % 2 == 0) {
    document.getElementById("evenOrOdd").innerHTML = "Even";
  }
  if (number % 2 == 1) {
    document.getElementById("evenOrOdd").innerHTML = "Odd";
  }
}

function onChange(value) {
  number = Number(value);
}


