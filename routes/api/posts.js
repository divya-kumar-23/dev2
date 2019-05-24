const express = require("express");
const router = express.Router();

//@route  get api/Posts
//@desc Test route
//@access Public

router.get("/", (req, res) => res.send("post route"));

module.exports = router;
