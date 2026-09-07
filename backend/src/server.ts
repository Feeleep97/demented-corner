import http from "node:http";

const server = http.createServer((req, res) => {
  console.log(req.method, JSON.stringify(req.url));
  console.log("test");
  console.log("test");
  console.log("test");
  res.end("hello");
});

server.listen(3000, () => console.log("listen on :3000"));
