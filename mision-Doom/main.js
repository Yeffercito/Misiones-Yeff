const button_crear = document.getElementById("button_crear");
const input_nombre = document.getElementById("input_nombre");
const nombres = [];

let todo = JSON.parse(localStorage.getItem("todo"))

input_nombre.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    console.log(input_nombre.value);
    if (nombres.length !== 0) {
      console.log("a");
    }
    if (localStorage.getItem("todo")) {
      let todo = JSON.parse(localStorage.getItem("todo"))
      console.log(todo);
    }
  }
});
