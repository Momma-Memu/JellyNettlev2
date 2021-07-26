const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');


const validateLogin = [
    check('credential')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a valid email or username.'),
    check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a password.'),
    handleValidationErrors,
  ];


router.get('/', restoreUser, (req, res) => {
    const { user } = req;
    console.log(user)
    if (user) {
    return res.json({ user: user.toSafeObject() });

    } else return res.json({});
});

//login route, needs to be updated for your cradentials later;
router.post('/', validateLogin, asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['Uh oh... Looks like your username or password did not match a user in our system.'];
        return next(err);
    }
    await setTokenCookie(res, user);

    return res.json({ user });
}));

router.delete('/', (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
});


module.exports = router;