const db = require('../config/db');

const deleteSalaDeAula = async (req, res) => {
  const { id } = req.params;
  try {
    const sql = 'UPDATE salasdeaula SET removido = true WHERE salasdeaulaid = $1';
    await db.query(sql, [id]);

    res.status(200).json('Sala de aula deletada com sucesso');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

module.exports = deleteSalaDeAula;