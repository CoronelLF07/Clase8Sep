let fuente = document.getElementById("fuente");
let destino = document.getElementById("destino");

fuente.addEventListener("dragstart", (evento)=>{
  console.log("Inicia el arrastre");
});

destino.addEventListener("dragover", (evento)=> {
  evento.preventDefault();
});

destino.addEventListener("drop", (evento)=>{
  evento.preventDefault();
  console.log("Soltado");
});
