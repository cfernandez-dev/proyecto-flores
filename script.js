// ================================================
//  script.js — Flores de Limpiapipas
//  Cada bloque dice qué punto del taller cumple.
// ================================================


// ===== Punto 9: mensaje en la consola del navegador =====
// Para verlo: clic derecho en la página > Inspeccionar > pestaña "Consola"
console.log("¡La página de Flores de Limpiapipas cargó correctamente! 🌸");


// ===== Punto 10: función que muestra una alerta de bienvenida =====
function mostrarBienvenida() {
  alert("Bienvenido al sitio web");
}

// Una función no hace nada hasta que la "llamamos":
mostrarBienvenida();


// ===== Punto 11: botón que cambia el color de fondo =====
const botonColor = document.getElementById("boton-color");

// Lista de colores pastel por los que vamos a ir pasando
const colores = ["#fff7f9", "#fdf3e1", "#eef7ee", "#eef3fd", "#f5eefc"];
let posicionColor = 0;

botonColor.addEventListener("click", function () {
  posicionColor = posicionColor + 1;

  // Si llegamos al final de la lista, volvemos al primero
  if (posicionColor >= colores.length) {
    posicionColor = 0;
  }

  document.body.style.backgroundColor = colores[posicionColor];
});


// ===== Punto 12: validar que el formulario no tenga campos vacíos =====
const formulario = document.getElementById("formulario-registro");
const mensajeFormulario = document.getElementById("mensaje-formulario");

formulario.addEventListener("submit", function (evento) {
  // Evita que la página se recargue al enviar el formulario
  evento.preventDefault();

  // .value lee lo que escribió la persona; .trim() quita espacios sobrantes
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();

  // || significa "o": si CUALQUIERA de los tres está vacío...
  if (nombre === "" || correo === "" || contrasena === "") {
    mensajeFormulario.textContent = "⚠️ Por favor llena todos los campos.";
    mensajeFormulario.className = "error";
  } else {
    mensajeFormulario.textContent = "✅ ¡Gracias por registrarte, " + nombre + "!";
    mensajeFormulario.className = "exito";
    formulario.reset(); // limpia los campos
  }
});


// ===== Punto 13: cambiar el texto de un párrafo con un botón =====
const textoConsejo = document.getElementById("texto-consejo");
const botonConsejo = document.getElementById("boton-consejo");

const consejos = [
  "💡 No necesitan agua ni sol: puedes ponerlas en cualquier rincón de tu casa.",
  "💡 Para limpiarlas, solo sacúdeles el polvo con suavidad o usa un secador en frío.",
  "💡 Puedes doblar un poco los tallos para acomodar el ramo como más te guste.",
  "💡 Guárdalas lejos de mascotas curiosas: ¡los limpiapipas parecen juguetes!"
];
let posicionConsejo = 0;

botonConsejo.addEventListener("click", function () {
  textoConsejo.textContent = consejos[posicionConsejo];

  posicionConsejo = posicionConsejo + 1;
  if (posicionConsejo >= consejos.length) {
    posicionConsejo = 0;
  }
});


// ===== Punto 14: contador que aumenta con cada clic =====
const botonMeGusta = document.getElementById("boton-me-gusta");
const contador = document.getElementById("contador");
let cantidadMeGusta = 0;

botonMeGusta.addEventListener("click", function () {
  cantidadMeGusta = cantidadMeGusta + 1;
  contador.textContent = cantidadMeGusta;
});


// ===== Punto 15: mostrar u ocultar el menú de navegación =====
const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
  // toggle: si el menú tiene la clase "oculto" se la quita; si no, se la pone
  menu.classList.toggle("oculto");

  // Cambiamos el texto del botón según el estado del menú
  if (menu.classList.contains("oculto")) {
    botonMenu.textContent = "☰ Mostrar menú";
  } else {
    botonMenu.textContent = "☰ Ocultar menú";
  }
});