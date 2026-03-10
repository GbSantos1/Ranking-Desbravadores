const db = require('../config/db');

const { hashPassword } = require('../utils/hash');

class Member {
  static async getAllByClub(clubId) {
    const [rows] = await db.query('SELECT id, name, phone, role, club_id, unit_id FROM members WHERE club_id = ?', [clubId]);
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT id, name, phone, role, club_id, unit_id FROM members WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(member) {
    const { name, phone, password, role, club_id, unit_id } = member;
    const hashedPassword = await hashPassword(password);
    const [result] = await db.query('INSERT INTO members (name, phone, password, role, club_id, unit_id) VALUES (?, ?, ?, ?, ?, ?)', [name, phone, hashedPassword, role, club_id, unit_id]);
    return result.insertId;
  }

  static async update(id, member) {
    const { name, phone, role, unit_id } = member;
    await db.query('UPDATE members SET name = ?, phone = ?, unit_id = ? WHERE id = ?', [name, phone, role, unit_id, id]);
  }

  static async delete(id) {
    await db.query('DELETE FROM members WHERE id = ?', [id]);
  }

  static async findByPhone(phone) {
    const [rows] = await db.query('SELECT * FROM members WHERE phone = ?', [phone]);
    return rows[0];
  }
}

module.exports = Member;