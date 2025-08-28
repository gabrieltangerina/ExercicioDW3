const db = require('../config/db');

const getAllSalasDeAula = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM salasdeaula WHERE removido = false ORDER BY salasdeaulaid ASC');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

module.exports = getAllSalasDeAula;