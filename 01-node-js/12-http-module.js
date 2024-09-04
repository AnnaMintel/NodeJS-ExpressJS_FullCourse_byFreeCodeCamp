const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Welcome to home page");
      break;
    case "/about":
      res.end("Here is About page");
      break;
    default:
      res.end(`
            <h1>Oops!</h1>
            <a href='/'>Come back to the main page</a>
            `);
      break;
  }
});

server.listen(5001);
