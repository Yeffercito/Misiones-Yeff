const button1 = document.getElementById("button1");
const imail = document.getElementById("imail");
const usuario = document.getElementById("usuario");
const invalid1 = document.getElementById("invalid1");
const invalid2 = document.getElementById("invalid2");

button1.addEventListener("click", function () {
    invalid1.innerHTML=""
    invalid2.innerHTML=""
  datos.forEach((element) => {
    let imaill = imail.value;
    let usuarioo = usuario.value;
    if (imaill == element.email) {
      if ((usuarioo == element.username)) {
        window.location.href = "index1.html";
      }
      else{
        invalid2.innerHTML=" <p>Usuario invalido</p>"
      }
    }else{
        invalid1.innerHTML="<p>Email no encontrado</p>"
    }
  });
});

const main = async () => {
  const responsive = await fetch("https://jsonplaceholder.typicode.com/users ");
  const data = await responsive.json();

  localStorage.setItem("Json", JSON.stringify(data));
};
let datos = JSON.parse(localStorage.getItem("Json"));
console.log(datos);
main();
