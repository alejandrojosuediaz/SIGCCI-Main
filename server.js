// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8083; // puedes cambiar el puerto

// Servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
