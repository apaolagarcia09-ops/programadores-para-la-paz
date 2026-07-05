const express = require('express');
const app = express();

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

// Ruta de estado
app.get('/estado', (req, res) => {
  res.json({
    estado: "Servidor funcionando",
    servicio: "API comunitaria"
  });
});

// Iniciar el servidor en puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
