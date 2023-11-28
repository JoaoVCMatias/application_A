const express = require('express');
const router = express.Router();
const bancodados = require('../conexao');

// Rota para obter todos os drones
router.get('/', (req, res) => {
  // Lógica para obter todos os drones do banco de dados
  res.json({ message: 'Obtendo todos os drones' });
});

// Rota para criar um novo drone
router.post('/', (req, res) => {
  // Lógica para criar um novo drone no banco de dados
  res.json({ message: 'Novo drone criado com sucesso' });
});

// Rota para atualizar um drone existente
router.put('/:id', (req, res) => {
  // Lógica para atualizar um drone no banco de dados
  res.json({ message: `Drone com ID ${req.params.id} atualizado com sucesso` });
});

// Rota para excluir um drone existente
router.delete('/:id', (req, res) => {
  // Lógica para excluir um drone do banco de dados
  res.json({ message: `Drone com ID ${req.params.id} excluído com sucesso` });
});

module.exports = router;
