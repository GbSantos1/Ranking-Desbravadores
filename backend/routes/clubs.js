const express = require('express');

const router = express.Router();

const { getClubs, getClub, createClub, updateClub, deleteClub } = require('../controllers/clubController');

const auth = require('../middlewares/auth');

router.get('/', auth, getClubs);

router.get('/:id', auth, getClub);

router.post('/', auth, createClub);

router.put('/:id', auth, updateClub);

router.delete('/:id', auth, deleteClub);

module.exports = router;