var express = require("express");
var router = express.Router();
const users = require("../users");
let cors = require("cors");

router.use(cors());
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("login system");
});

router.post("/", (req, res) => {
  console.log(req.body);

  const user = users.filter(
    (u) => u.username === req.body.userName && u.password === req.body.passWord
  );
  console.log(user);
  if (user.length > 0) {
    res.json(user[0].id);
  } else {
    res.json("Error, user not found!");
  }
});

module.exports = router;
