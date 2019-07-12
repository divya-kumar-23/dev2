const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route  get api/profile/me
//@desc get current users profile
//@access private

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


//@route  get api/profile/
//@desc create or update profile
//@access private

router.post('/', [
  auth,
  [check('status', 'Status is required')
    .not()
    .isEmpty()
  ]
], (req, res) => {

})

module.exports = router;
