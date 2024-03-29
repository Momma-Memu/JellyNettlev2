const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const sessionRouter = require('./session');
const userRouter = require('./users');
const profileRouter = require('./profile');
const privacyRouter = require('./privacy');
const notificationsRouter = require('./notifications');

router.use('/session', sessionRouter);
router.use('/users', userRouter);
router.use('/profile', profileRouter);
router.use('/privacy', privacyRouter);
router.use('/notifications', notificationsRouter);


router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    },
  })
  setTokenCookie(res, user);
  return res.json({ user });
}));


// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);


const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);



module.exports = router;