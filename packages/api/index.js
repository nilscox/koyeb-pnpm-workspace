const express = require("express");
const { add } = require("../core/index");

const app = express();

app.get("/", (req, res) => {
  res.send(`4 + 2 = ${add(4, 2)}`);
});

app.listen(Number(process.env.PORT), "0.0.0.0", () => {
  console.log(`server started on port ${process.env.PORT}`);
});
