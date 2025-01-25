const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    console.error('Error:', error);
    //Without this line, the server will still be responsive but may lead to unexpected behavior in subsequent requests
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

async function doAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error randomly
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Operation completed successfully';
}

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});