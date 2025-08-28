const express = require('express');
const router = express.Router();

// Importando os controllers
const getAllSalasDeAula = require('../controllers/getAllSalasDeAula');
const getSalaDeAulaById = require('../controllers/getSalaDeAulaById');
const insertSalaDeAula = require('../controllers/insertSalaDeAula');
const updateSalaDeAula = require('../controllers/updateSalaDeAula');
const deleteSalaDeAula = require('../controllers/deleteSalaDeAula');

// Definindo as rotas e associando aos controllers
router.get('/', getAllSalasDeAula);
router.get('/:id', getSalaDeAulaById);
router.post('/', insertSalaDeAula);
router.put('/:id', updateSalaDeAula);
router.delete('/:id', deleteSalaDeAula);

module.exports = router;