const db = require('../config/db');

class Unit {
  static async getAllByClub(clubId) {
    const [rows] = await db.query('SELECT * FROM units WHERE club_id = ?', [clubId]);
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM units WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(unit) {
    const { name, club_id, counselor_id, associate_counselor_id } = unit;
    const [result] = await db.query('INSERT INTO units (name, club_id, counselor_id, associate_counselor_id) VALUES (?, ?, ?, ?)', [name, club_id, counselor_id, associate_counselor_id]);
    return result.insertId;
  }

  static async update(id, unit) {
    const { name, counselor_id, associate_counselor_id } = unit;
    await db.query('UPDATE units SET name = ?, counselor_id = ?, associate_counselor_id = ? WHERE id = ?', [name, counselor_id, associate_counselor_id, id]);
  }

  static async delete(id) {
    await db.query('DELETE FROM units WHERE id = ?', [id]);
  }
}

module.exports = Unit;