const express = require("express");
const app = express();
const darkskyAPI = require("./utils/darkskyAPI");

require("dotenv").config();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(express.static("static"));
app.use("/images", express.static("static/images"));

app.get("/:latitude/:longitude", (req, res) => {
  const { latitude, longitude } = req.params;
  darkskyAPI(latitude, longitude);
  res.render("index", { title: "Weather APP" });
});

// app.get("/weather", (req, res) => {
//   const { lat, lan } = req.query;
//   darkskyAPI(lat, lan);
//   res.render("index", { title: "Weather APP" });
// });

app.listen(port, () => console.log(`Server is running on port ${port}`));
