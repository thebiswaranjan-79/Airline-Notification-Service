const express = require("express");

const { ServerConfig } = require("./config/index");
const apiRouter = require("./routes/index");
const mailsender = require("./config/email-config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server Runs at PORT ${ServerConfig.PORT}`);
});
