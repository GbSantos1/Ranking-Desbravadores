const Club = require('../models/Club');

const getClubs = async (req, res) => {
  try {
    const clubs = await Club.getAll();
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

const getClub = async (req, res) => {
  try {
    const club = await Club.getById(req.params.id);
    if (!club) return res.status(404).json({ msg: 'Club not found' });
    res.json(club);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

const createClub = async (req, res) => {
  try {
    const id = await Club.create(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

const updateClub = async (req, res) => {
  try {
    await Club.update(req.params.id, req.body);
    res.json({ msg: 'Club updated' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

const deleteClub = async (req, res) => {
  try {
    await Club.delete(req.params.id);
    res.json({ msg: 'Club deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { getClubs, getClub, createClub, updateClub, deleteClub };