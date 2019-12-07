const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(express.static("static"));
app.use("/images", express.static("static/images"));

app.get("/", (req, res) => {
  res.render("index", { title: "Weather APP" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
