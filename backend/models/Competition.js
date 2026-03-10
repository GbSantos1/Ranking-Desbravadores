const db = require('../config/db');

class Competition {
  static async getAllByClub(clubId) {
    const [rows] = await db.query('SELECT * FROM competitions WHERE club_id = ?', [clubId]);
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM competitions WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(competition) {
    const { name, club_id, start_date, end_date, active } = competition;
    const [result] = await db.query('INSERT INTO competitions (name, club_id, start_date, end_date, active) VALUES (?, ?, ?, ?, ?)', [name, club_id, start_date, end_date, active]);
    return result.insertId;
  }

  static async update(id, competition) {
    const { name, start_date, end_date, active } = competition;
    await db.query('UPDATE competitions SET name = ?, start_date = ?, end_date = ?, active = ? WHERE id = ?', [name, start_date, end_date, active, id]);
  }

  static async delete(id) {
    await db.query('DELETE FROM competitions WHERE id = ?', [id]);
  }
}

module.exports = Competition;