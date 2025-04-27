const pool = require('../models/db');

exports.getSoloData = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  try {
    const result = await pool.query('SELECT * FROM solo ORDER BY criado_em DESC LIMIT $1', [limit]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching solo data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.postSoloData = async (req, res) => {
  const { umidade, temperatura, ph, gps } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO solo (umidade, temperatura, ph, lat, lon) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [umidade, temperatura, ph, gps?.lat || null, gps?.lon || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting solo data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getClimaData = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  try {
    const result = await pool.query('SELECT * FROM clima ORDER BY criado_em DESC LIMIT $1', [limit]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching clima data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.postClimaData = async (req, res) => {
  const { vento, chuva, temperatura, gps } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO clima (vento, chuva, temperatura, lat, lon) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [vento, chuva, temperatura, gps?.lat || null, gps?.lon || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting clima data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
