
document.addEventListener("DOMContentLoaded", function () {
const square = document.getElementById("square")

square.addEventListener("mouseover", function() {
 square.style.backgroundColor = "red"
})
square.addEventListener("mouseout", function() {
  square.style.backgroundColor = "blue"
})
});