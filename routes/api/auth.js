const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');

//@route  get api/auth
//@desc Test route
//@access Public

router.get("/", auth, async (req, res) => {
    try {
        const user = await User
    } catch (err) {

    }
}
);

module.exports = router;
