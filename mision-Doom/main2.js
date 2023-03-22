const button_simple = document.getElementById("button_simple");
const button_enviar = document.getElementById("button_enviar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const area = document.getElementById("area");
const usuario = document.getElementById("usuario");
const edad = document.getElementById("edad");
const direccion = document.getElementById("direccion");
const email = document.getElementById("email");
let guardado
let todo = []
let docencias = []
let tecnologicas = []
let marketings = []
button_simple.addEventListener("click", function () {
  localStorage.setItem("todo", JSON.stringify(todo))
  localStorage.setItem("docencias", JSON.stringify(docencias))
  localStorage.setItem("tecnologicas", JSON.stringify(tecnologicas))
  localStorage.setItem("marketings", JSON.stringify(marketings))
});

button_enviar.addEventListener("click", function () {
  if (validacion() == false) {

    let nombree = nombre.value;
    let apellidoe = apellido.value;
    let areae = area.value;
    let usuarioe = usuario.value;
    let edade = edad.value;
    let direccione = direccion.value;
    let emaile = email.value;
    guardado = {
      nombre: nombree,
      apellido: apellidoe,
      area: areae,
      usuarioe: usuarioe,
      edad: edade,
      direccion: direccione,
      email: emaile
    }
    todo.push(guardado)
    console.log(todo);

    localStorage.setItem("guardado", JSON.stringify(guardado))

    nombre.value = ""
    apellido.value = ""
    area.value = ""
    usuario.value = ""
    edad.value = ""
    direccion.value = ""
    email.value = ""

    if (areae.toUppercase() == "DOCENCIA") {
      docencias.push(guardado)
    } else if (areae.toUppercase() == "TECNOLOGIA") {
      tecnologicas.push(guardado)
    } else if (areae.toUppercase() == "MARKETING") {
      marketings.push(guardado)
    }
  }
});


function limpiar() {
  nombre.value = ""
  apellido.value = ""
  area.value = ""
  usuario.value = ""
  edad.value = ""
  direccion.value = ""
  email.value = ""
}

function validacion() {
  if (nombre.value ||
    apellido.value ||
    area.value ||
    usuario.value ||
    edad.value ||
    direccion.value ||
    email.value) {
    return false;
  }
  else {
    return true
  }
}


