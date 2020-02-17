// @ts-check
require("dotenv").config();
const express = require("express");
const next = require("next");
const fs = require("fs");
const mongoose = require("mongoose");
const { buildSchema } = require("graphql");
const { ApolloServer, gql } = require("apollo-server-express");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 4000;

// @ts-ignore
const server = next({ dev });
const handler = server.getRequestHandler();

// Provide resolver functions for your schema fields

server.prepare().then(() => {
  const app = express();

  mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connected to mongodb");
    }
  );

  const gqlFile = fs.readFileSync("./src/graphql/schema.graphql", "utf-8");
  const typeDefs = gql`
    ${gqlFile}
  `;

  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  app.use(require("helmet")());
  app.use(require("cors")());

  app.post("/", (req, res) => {
    res.send("hello");
  });

  apolloServer.applyMiddleware({ app });

  app.get("*", (req, res, next) =>
    req.path !== apolloServer.graphqlPath ? handler(req, res, next) : next()
  );

  app.listen({ port }, () => {
    console.log(`Listening on port ${port}`);
    console.log(`http://localhost:${port}`);
  });
});
