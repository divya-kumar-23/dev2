const express = require("express");
const router = express.Router();

//@route  get api/users
//@desc Test route
//@access Public

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("user route");
});

module.exports = router;
