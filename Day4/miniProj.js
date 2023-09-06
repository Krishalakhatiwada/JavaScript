const colors = ["#142d4c", "#9fd3c7", "#ff6f3c", "#f95959", "#5585b5"];
let button = document.getElementById("btn");
button.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
});

button.innerText="Change color";