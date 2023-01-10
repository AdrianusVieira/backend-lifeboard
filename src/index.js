const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3333;

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: "500mb",
  })
);
app.use(
  bodyParser.json({ extended: true, parameterLimit: 100000, limit: "500mb" })
);
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log("Server listening on port:" + port);
});
