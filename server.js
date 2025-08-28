const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const salasDeAulaRoutes = require('./routes/salaDeAula');
app.use('/api/salas', salasDeAulaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});