const http = require("http");
const dotenv = require('dotenv').config();
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.uzoxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
MongoClient.connect(uri, {useUnifiedTopology: true }, (err, client) => {
  if (err) console.log("Error occurred connecting to MongoDB...");
  console.log("Connected to MongoDB!");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});