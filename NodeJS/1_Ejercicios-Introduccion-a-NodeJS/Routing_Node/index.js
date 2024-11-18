const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = q.pathname;

    fs.readFile(`./Pages/${filename}.html`, (err, data) => {
      try {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      } catch (error) {
        res.writeHead(404, { "Content-Type": "text/html" });
        console.error(error);
        return res.end("404 Not Found"); 
      }
    });
  }).listen(8080);