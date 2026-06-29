const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor de Node.js! Este es mi primer servidor con Express.');
});

// Ruta adicional de ejemplo
app.get('/api/mensaje', (req, res) => {
  res.json({ mensaje: 'Este es un mensaje desde el servidor', fecha: new Date() });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log('Presiona Ctrl+C para detener el servidor');
});
