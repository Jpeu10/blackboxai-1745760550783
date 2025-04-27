const pool = require('../models/db');
const fs = require('fs');
const path = require('path');

async function createTables() {
  try {
    const sql = fs.readFileSync(path.join(__dirname, 'create_tables.sql')).toString();
    await pool.query(sql);
    console.log('Tabelas criadas com sucesso!');
  } catch (error) {
    console.error('Erro ao criar tabelas:', error);
  } finally {
    await pool.end();
  }
}

createTables();
