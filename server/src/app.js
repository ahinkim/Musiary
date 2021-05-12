const express = require("express");
const initializer = require("./initializer");

const startServer = async () => {
  process.env.NODE_ENV =
    process.env.NODE_ENV && process.env.NODE_ENV.trim().toLowerCase() == "production" ? "PRODUCTION" : "DEVELOPMENT";
  const app = express();
  await initializer(app);
  const { SERVER_PORT } = process.env;

  app.listen(SERVER_PORT, () => {
    console.log(`Server Init on ${SERVER_PORT}!`);
  });
};

startServer();
