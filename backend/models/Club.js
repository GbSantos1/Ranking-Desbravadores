const db = require('../config/db');

class Club {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM clubs');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM clubs WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(club) {
    const { name, church, city, state, logo } = club;
    const [result] = await db.query('INSERT INTO clubs (name, church, city, state, logo) VALUES (?, ?, ?, ?, ?)', [name, church, city, state, logo]);
    return result.insertId;
  }

  static async update(id, club) {
    const { name, church, city, state, logo } = club;
    await db.query('UPDATE clubs SET name = ?, church = ?, city = ?, state = ?, logo = ? WHERE id = ?', [name, church, city, state, logo, id]);
  }

  static async delete(id) {
    await db.query('DELETE FROM clubs WHERE id = ?', [id]);
  }
}

module.exports = Club;