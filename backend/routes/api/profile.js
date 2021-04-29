const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Profile, Privacy } = require('../../db/models');



router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;

  const profile = await Profile.findOne({where: {userId: id} });
  console.log(profile)
  return res.json(profile)
}));

router.post('/build', asyncHandler(async (req, res) => {
  const data = req.body;
  console.log(data)

  const newProfile = await Profile.create(data);
  const privacyData = {
    profileId: newProfile.id,
    displayRealName: false,
    gender: true,
    displayGroups: true,
    displayFriends: true,
    dob: false,
    whoCanFindMe: 'anyone',
  };
  const newPrivacySettings = await Privacy.create(privacyData);
  res.json(newProfile);
}));



module.exports = router;