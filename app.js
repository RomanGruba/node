const express = require("express");
const app = express();
const port = 5000;

app.use("/", (req, res) => {
  // const query = req.query;
  // console.log(query);
  // res.send("Hi!!!");

  const body = req.body;
  res.json(body);
});

app.listen(port, () => console.log(`Server is on ${port}`));
