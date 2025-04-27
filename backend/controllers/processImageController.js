const axios = require('axios');
const pool = require('../models/db');

exports.processImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file provided' });
  }

  try {
    // Send image buffer to Hugging Face IA model
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/your-model-name',
      req.file.buffer,
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          'Content-Type': 'application/octet-stream',
        },
      }
    );

    const detectedIssues = response.data;

    // Save each issue in plantas table (simplified)
    const plantRecords = [];
    for (const issue of detectedIssues) {
      // Example: issue contains image_url, diagnosis, lat, lon
      const { image_url, diagnosis, lat, lon } = issue;
      const result = await pool.query(
        'INSERT INTO plantas (imagem_url, diagnostico, lat, lon) VALUES ($1, $2, $3, $4) RETURNING *',
        [image_url, diagnosis, lat, lon]
      );
      plantRecords.push(result.rows[0]);
    }

    res.json({ detectedIssues, plantRecords });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
