const http = require('http');

/**
 * @param req Request = Requerimiento del usuario
 * @param res Response = Respuesta que le daremos al usuario
 */
const server = http.createServer((req, res) => {
  console.info('Pedido capturado');

  res.writeHead(200, {
    'Content-Type': 'text/html',
  });

  res.end('<h1>Hola a todos!</h1>\n');
});

server.listen(4000);

console.info('Servidor escuchando en el puerto 4000');
