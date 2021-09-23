const net = require('net');

const server = net.createServer();
const port = 3000;

server.listen(port, () => {
  console.log(`listening on port ${port}...`);
});

server.on('connection', (client) => {
  console.log("A client just connected");

  client.write("Hey client, what can I do for you today");
  client.setEncoding('utf8');



});


