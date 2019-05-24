const express = require("express");
const router = express.Router();

//@route  get api/profile
//@desc Test route
//@access Public

router.get("/", (req, res) => {
  console.log(req.body);
  res.send("Profile route");
});

module.exports = router;
