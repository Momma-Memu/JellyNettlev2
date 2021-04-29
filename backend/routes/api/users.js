const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const bcrypt = require('bcryptjs');

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    check('confirmPassword').custom((value, { req }) => {
      if(value !== req.body.password) {
        throw new Error('Password and Confirm Password must match exactly.')
      }
    }),
    handleValidationErrors,
  ];


router.post('/', asyncHandler(async (req, res) => {
    const { email, password, username, dob } = req.body;
    console.log(req.body)
    const user = await User.signup({ email, username, password, dob });

    await setTokenCookie(res, user);

    return res.json(user);
    // res.json({one:1})
}));

router.put('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  if(req.body.password){
    req.body.password = bcrypt.hashSync(req.body.password);
  }
  const updated = await user.update(req.body);

  res.json(updated);
}));




module.exports = router;