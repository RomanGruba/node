const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.get(
//   "/app",
//   (req, res, next) => {
//     const { is } = req.query;
//     if (is) {
//       next();
//     } else {
//       res.json({ message: `Add please query is = true ` });
//     }
//   },
//   (req, res) => {
//     res.json({ message: `Salute, is = ${req.query.is}` });
//   }
// );
// app.use("/", (req, res) => {
// const query = req.query;
// console.log(query);
// res.send("Hi!!!");

//   const body = req.body;
//   console.log(body);
//   res.json(body);
// });

app.post("/", upload.single(), (req, res) => {
  res.sendFile(req.file.path);
});

app.listen(port, () => console.log(`Server is on ${port}`));
