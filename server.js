const http = require('http');
const app = require('./app.js');

const PORT = 3000;

const server = http.createServer(app);

server.on('listening', () => {
    console.log(`server en route sur le port : ${PORT}`);
});

server.listen(PORT);