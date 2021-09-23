const net = require('net');


const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000
  });
  
  conn.setEncoding("utf-8");

  conn.on("data", (data) => {
    console.log(`Client says: ${data}`);
  });

  


  return conn;
};

connect();