const db = require('../config/db');

const insertSalaDeAula = async (req, res) => {
  const { descricao, localizacao, capacidade } = req.body;

  if (!descricao || !localizacao || capacidade === undefined) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const sql = 'INSERT INTO salasdeaula (descricao, localizacao, capacidade) VALUES ($1, $2, $3)';
    await db.query(sql, [descricao, localizacao, capacidade]);
    res.status(201).json('Sala de aula salva com sucesso');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

module.exports = insertSalaDeAula;