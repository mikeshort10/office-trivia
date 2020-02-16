// @ts-check
require("dotenv").config();
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 4000;

// @ts-ignore
const server = next({ dev });
const handler = server.getRequestHandler();

server.prepare().then(() => {
  const app = express();
  app.use(require("helmet")());
  app.use(require("cors")());

  app.post("/", (req, res) => {
    res.send("hello");
  });

  app.get("*", handler);

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`http://localhost:${port}`);
  });
});
