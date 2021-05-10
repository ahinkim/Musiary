const express = require("express");
const initializer = require("./initializer");

const startServer = async () => {
  const app = express();
  await initializer(app);
  const { SERVER_PORT } = process.env;

  app.listen(SERVER_PORT, () => {
    console.log(`Server Init on ${SERVER_PORT}!`);
  });
};

startServer();
