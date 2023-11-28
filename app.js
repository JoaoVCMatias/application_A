const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Rotas CRUD para drones
// Implemente as rotas necessárias para realizar as operações CRUD
// Exemplo: app.get('/drones', getAllDrones);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
