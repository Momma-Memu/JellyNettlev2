const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Privacy } = require('../../db/models');



router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;

  const privacy = await Privacy.findOne({where: {profileId: id} });

  return res.json(privacy)
}));


router.put('/update/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;

  if(req.body.password){
    req.body.password = bcrypt.hashSync(req.body.password);
  }
  const updated = await Privacy.update(req.body, { where: { id }, returning: true, plain: true } );

  res.json(updated[1]);
}));


module.exports = router;