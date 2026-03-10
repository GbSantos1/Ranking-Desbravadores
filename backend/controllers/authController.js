const jwt = require('jsonwebtoken');

const Member = require('../models/Member');

const { comparePassword } = require('../utils/hash');

const login = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const member = await Member.findByPhone(phone);
    if (!member || !(await comparePassword(password, member.password))) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: member.id, role: member.role, club_id: member.club_id }, process.env.JWT_SECRET);
    res.json({ token, member: { id: member.id, name: member.name, role: member.role, club_id: member.club_id, unit_id: member.unit_id } });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { login };