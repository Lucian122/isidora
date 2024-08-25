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