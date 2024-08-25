const archivosTexto = [
  '1.txt',
  '2.txt'
];

const archivoAleatorio = archivosTexto[Math.floor(Math.random() * archivosTexto.length)];

fetch(archivoAleatorio)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo: ' + response.statusText);
    }
    return response.text();
  })
  .then(texto => {
    document.getElementById("texto-dinamico").textContent = texto;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById("texto-dinamico").textContent = 'Error al cargar el texto.';
  });

  // Obtenemos la fecha actual
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; // Los meses van de 0 a 11
const year = today.getFullYear();

// Array con contenido distinto para cada día
const dailyContent = [
    "Hoy es un buen día para empezar algo nuevo.",
    "La inspiración está en todos lados, ¡encuéntrala!",
    "Recuerda: la constancia es clave para lograr cualquier cosa.",
    "Sonríe, nunca sabes a quién le puedes alegrar el día.",
    "Pequeños pasos llevan a grandes logros.",
    // Agrega más mensajes según prefieras
];

// Lógica para cambiar contenido cada día
const contentElement = document.getElementById("content");
const randomIndex = (day + month + year) % dailyContent.length;
contentElement.innerHTML = `<p>${dailyContent[randomIndex]}</p>`;