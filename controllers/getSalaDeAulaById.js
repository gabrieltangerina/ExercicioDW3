const db = require('../config/db');

const getSalaDeAulaById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query('SELECT * FROM salasdeaula WHERE salasdeaulaid = $1 AND removido = false', [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Sala de aula não encontrada.' });
    }
    
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

module.exports = getSalaDeAulaById;