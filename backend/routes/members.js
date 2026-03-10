const express = require('express');

const router = express.Router();

const { getMembers, getMember, createMember, updateMember, deleteMember } = require('../controllers/memberController');

const auth = require('../middlewares/auth');

router.get('/', auth, getMembers);

router.get('/:id', auth, getMember);

router.post('/', auth, createMember);

router.put('/:id', auth, updateMember);

router.delete('/:id', auth, deleteMember);

module.exports = router;