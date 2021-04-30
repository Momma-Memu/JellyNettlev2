const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Profile, Privacy } = require('../../db/models');



router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;

  const profile = await Profile.findOne({where: {userId: id}, include: { model: Privacy } });

  return res.json(profile)
}));

router.post('/build', asyncHandler(async (req, res) => {
  const data = req.body;

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

router.put('/update/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;

  if(req.body.password){
    req.body.password = bcrypt.hashSync(req.body.password);
  }
  const updated = await Profile.update(req.body, { where: { id }, returning: true, plain: true, include: { model: Privacy } } );

  res.json(updated[1]);
}));


module.exports = router;