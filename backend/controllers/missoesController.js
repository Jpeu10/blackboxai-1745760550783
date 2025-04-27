const pool = require('../models/db');

exports.getMissoes = async (req, res) => {
  const status = req.query.status;
  try {
    let query = 'SELECT * FROM missoes';
    const params = [];
    if (status) {
      query += ' WHERE status = $1';
      params.push(status);
    }
    query += ' ORDER BY criado_em DESC';
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching missoes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.postMissao = async (req, res) => {
  const { requestedBy, waypoints } = req.body;
  try {
    const dados = { waypoints };
    const result = await pool.query(
      'INSERT INTO missoes (requested_by, status, dados) VALUES ($1, $2, $3) RETURNING *',
      [requestedBy, 'Agendada', dados]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting missao:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.startDroneMission = async (req, res) => {
  const { missionId } = req.body;
  // TODO: Implement drone instruction via MQTT or HTTP
  res.json({ message: `Drone mission ${missionId} started (not implemented)` });
};
