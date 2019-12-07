const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render(
    "index",
    {},
    err => {
      console.log(err);
    },
    ""
  );
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
