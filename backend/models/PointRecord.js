const db = require('../config/db');

class PointRecord {
  static async getAllByClub(clubId) {
    const [rows] = await db.query('SELECT pr.*, m.name as member_name, u.name as unit_name FROM point_records pr LEFT JOIN members m ON pr.member_id = m.id LEFT JOIN units u ON pr.unit_id = u.id WHERE m.club_id = ?', [clubId]);
    return rows;
  }

  static async getByMember(memberId) {
    const [rows] = await db.query('SELECT * FROM point_records WHERE member_id = ?', [memberId]);
    return rows;
  }

  static async create(record) {
    const { member_id, unit_id, competition_id, points, reason, created_by } = record;
    const [result] = await db.query('INSERT INTO point_records (member_id, unit_id, competition_id, points, reason, created_by, date) VALUES (?, ?, ?, ?, ?, ?, NOW())', [member_id, unit_id, competition_id, points, reason, created_by]);
    return result.insertId;
  }

  static async getTotalPoints(memberId, competitionId = null) {
    let query = 'SELECT SUM(points) as total FROM point_records WHERE member_id = ?';
    let params = [memberId];
    if (competitionId) {
      query += ' AND competition_id = ?';
      params.push(competitionId);
    }
    const [rows] = await db.query(query, params);
    return rows[0].total || 0;
  }

  static async getUnitTotalPoints(unitId, competitionId = null) {
    let query = 'SELECT SUM(points) as total FROM point_records WHERE unit_id = ?';
    let params = [unitId];
    if (competitionId) {
      query += ' AND competition_id = ?';
      params.push(competitionId);
    }
    const [rows] = await db.query(query, params);
    return rows[0].total || 0;
  }
}

module.exports = PointRecord;