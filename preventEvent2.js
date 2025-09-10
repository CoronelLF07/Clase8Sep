let liga = document.getElementById("liga");
let nombre = document.getElementById("nombre");

// Evento click sobre el link
liga.addEventListener("click", (event) =>{
  console.log("Click sobre el link");
  event.preventDefault();  // Evita que abra la página
});

nombre.addEventListener("keydown", (evento) =>{
  evento.preventDefault();  // Evita que escriba en el input

  console.log("Tipo de evento: " + evento.type);
  console.log("Código: " + evento.code);
  console.log("Tecla: " + evento.key);
  console.log("Repetida: " + evento.repeat);
  console.log("Ctrl presionado: " + evento.ctrlKey);

  if(evento.key === 'a'){
    document.getElementById("edad").focus();
  }

  if(evento.key === 'Enter'){
    console.log("Enter capturado");
    document.getElementById("edad").focus();
  }

  console.log("Location teclado: " + evento.location);
});
