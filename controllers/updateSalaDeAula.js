const db = require('../config/db');

const updateSalaDeAula = async (req, res) => {
  const { id } = req.params;
  const { descricao, localizacao, capacidade } = req.body;

  if (!descricao || !localizacao || capacidade === undefined) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const sql = `
      UPDATE salasdeaula 
      SET descricao = $1, localizacao = $2, capacidade = $3 
      WHERE salasdeaulaid = $4 AND removido = false
      `;
      
    await db.query(sql, [descricao, localizacao, capacidade, id]);

    res.status(201).json('Sala de aula atualizada com sucesso');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

module.exports = updateSalaDeAula;