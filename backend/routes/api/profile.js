const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Profile } = require('../../db/models');



router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;

  const profile = await Profile.findByPk(id);

  return res.json(profile)
}));



module.exports = router;