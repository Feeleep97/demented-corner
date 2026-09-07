import http from "node:http";

const server = http.createServer((req, res) => {
  console.log(req.method, JSON.stringify(req.url));
  res.end("hello");
  console.log("test");
});

server.listen(3000, () => console.log("listen on :3000"));
