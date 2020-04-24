const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const port = 4000;

server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.submitted = new Date();
  }
  // Continue to JSON Server router
  next();
});

server.use(router);

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`JSON Server is running is running on port ${port}`);
});
