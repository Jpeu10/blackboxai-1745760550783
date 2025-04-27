const pool = require('../models/db');

exports.getPlantas = async (req, res) => {
  const since = req.query.since;
  try {
    let query = 'SELECT * FROM plantas WHERE resolvida = FALSE';
    const params = [];
    if (since) {
      query += ' AND criado_em > $1';
      params.push(since);
    }
    query += ' ORDER BY criado_em DESC';
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching plantas:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.resolvePlanta = async (req, res) => {
  const { plantId } = req.body;
  try {
    const result = await pool.query(
      'UPDATE plantas SET resolvida = TRUE WHERE id = $1 RETURNING *',
      [plantId]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Planta not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error resolving planta:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
