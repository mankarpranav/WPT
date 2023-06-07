//mini-project-1

const fs = require("node:fs");
const http = require("node:http");
const url = require("node:url");

const server = http.createServer(function (req, resp) {
  var q = url.parse(req.url, true);

  switch (q.pathname) {
    case "/":
      fs.createReadStream("./public/index.html").pipe(resp);
      break;
    case "/submit":
      console.log(q);
      if (q.query.btn === "add") {
        var num1 = parseInt(q.query.num1);
        var num2 = parseInt(q.query.num2);
        var ans = num1 + num2;
        resp.setHeader("Content-Type", "text/plain");
        resp.end("ans is: " + ans);
      }

      break;
    default:
      break;
  }
});

server.listen(3000, () => {
  console.log("Server started at 3000 port...");
});
