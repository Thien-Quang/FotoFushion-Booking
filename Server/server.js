const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const routes = require("./src/routes");

const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

// parse application/json
app.use(bodyParser.json());

app.use(cors());

routes(app);

app.listen(port, hostname, () => {
  console.log(`Server up and running on port ${port}`);
});
