const express = require('express');

const app = express();

app.use((req, res, next) => {
  if (req.query.valid === 'si') {
    next();
  } else {
    res.send('No permitido');
  }
});

app.get('/api/usuarios', (req, res) => {
  console.info('Request a /api/usuarios!');
  res.json([{ usuario: 'Pepe' }, { usuario: 'Juan' }]);
});

app.listen(4000, () => {
  console.info('Atendiendo en el puerto 4000!');
});
