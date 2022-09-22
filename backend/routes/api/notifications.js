const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Request } = require('../../db/models');

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;

    const requests = await Request.findAll({ where: { toUserId: id } });
    return res.json([...requests]);
}));

module.exports = router;