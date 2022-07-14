const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Profile } = require('../../db/models');
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


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
    const user = await User.signup({ email, username, password, dob });

    await setTokenCookie(res, user);

    res.json(user);

}));

router.put('/update/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;

  if(req.body.password){
    req.body.password = bcrypt.hashSync(req.body.password);
  }
  const updated = await User.update(req.body, { where: { id }, returning: true, plain: true, } );

  res.json(updated[1]);
}));


router.delete('/delete/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  const oldUser = await user.destroy()

  res.json({ status: 'yeeted' });
}));

router.get('/search/:credential', restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;
  const credential = req.params.credential;
  let users;
  if (isNaN(Number(credential))) {
    users = await User.findAll({
      where: {
        username: {
          [Op.like]: `%${credential}%`,
          [Op.not]: user.username,
        }
      },
      include: [{
        model: Profile,
       }]
    })
  } else {
    users = await User.findAll({
      where: {
        id: credential,
      }
    })
  }

  res.json({ users });
}));

module.exports = router;