let timeLeft = document.querySelector(".time");
let value = 10;
let timerId = setInterval(() => {
  value = value - 1;
  timeLeft.innerText = value;
  console.log("the function is called");
  if (value <= 0) {
    value = 11;
  }
}, 1000); // Refresh every 1 second (1000 milliseconds)
