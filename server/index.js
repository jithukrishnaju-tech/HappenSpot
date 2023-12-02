const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const Usermodel = require("./db/Users");
app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://jithukrishnaju111:Krishna%402002@cluster0.kp07yro.mongodb.net/users"
);
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  Usermodel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password == password) {
        res.json("Sucess");
      } else {
        res.json("Password change");
      }
    } else {
      res.json("User is not there.");
    }
  });
});
app.post("/signup", (req, res) => {
  Usermodel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      res.json(err);
    });
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
