const db = require('../config/db');

class PointType {
  static async getAllByClub(clubId) {
    const [rows] = await db.query('SELECT * FROM point_types WHERE club_id = ?', [clubId]);
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM point_types WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(pointType) {
    const { club_id, name, points, type, active } = pointType;
    const [result] = await db.query('INSERT INTO point_types (club_id, name, points, type, active) VALUES (?, ?, ?, ?, ?)', [club_id, name, points, type, active]);
    return result.insertId;
  }

  static async update(id, pointType) {
    const { name, points, type, active } = pointType;
    await db.query('UPDATE point_types SET name = ?, points = ?, type = ?, active = ? WHERE id = ?', [name, points, type, active, id]);
  }

  static async delete(id) {
    await db.query('DELETE FROM point_types WHERE id = ?', [id]);
  }
}

module.exports = PointType;