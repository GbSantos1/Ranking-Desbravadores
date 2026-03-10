const Member = require('../models/Member');

const getMembers = async (req, res) => {
  try {
    const members = await Member.getAllByClub(req.user.club_id);
    res.json(members);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

const getMember = async (req, res) => {
  try {
    const member = await Member.getById(req.params.id);
    if (!member || member.club_id !== req.user.club_id) return res.status(404).json({ msg: 'Member not found' });
    res.json(member);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

const createMember = async (req, res) => {
  try {
    req.body.club_id = req.user.club_id;
    const id = await Member.create(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

const updateMember = async (req, res) => {
  try {
    const member = await Member.getById(req.params.id);
    if (!member || member.club_id !== req.user.club_id) return res.status(404).json({ msg: 'Member not found' });
    await Member.update(req.params.id, req.body);
    res.json({ msg: 'Member updated' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

const deleteMember = async (req, res) => {
  try {
    const member = await Member.getById(req.params.id);
    if (!member || member.club_id !== req.user.club_id) return res.status(404).json({ msg: 'Member not found' });
    await Member.delete(req.params.id);
    res.json({ msg: 'Member deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { getMembers, getMember, createMember, updateMember, deleteMember };