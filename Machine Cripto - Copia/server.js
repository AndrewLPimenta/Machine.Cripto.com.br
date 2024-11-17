// server.js

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db"); // Importando o banco de dados

const app = express();
const port = 5000;

// Middleware para processar JSON
app.use(bodyParser.json());

// Rota para o envio de dados do formulário
app.post("/api/usuarios", (req, res) => {
  const {
    nome,
    telefone,
    cep,
    renda,
    email,
    password,
    cripto,
    criptoInvestimento,
  } = req.body;

  // Inserindo os dados no banco de dados
  const query = `
    INSERT INTO usuarios (nome, telefone, cep, renda, email, password, cripto, criptoInvestimento)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    query,
    [nome, telefone, cep, renda, email, password, cripto, criptoInvestimento],
    function (err) {
      if (err) {
        return res
          .status(500)
          .json({ message: "Erro ao salvar os dados", error: err.message });
      }

      // Retornar a resposta de sucesso
      res
        .status(201)
        .json({ message: "Usuário cadastrado com sucesso", id: this.lastID });
    }
  );
});

// Rota para listar todos os usuários (opcional)
app.get("/api/usuarios", (req, res) => {
  db.all("SELECT * FROM usuarios", (err, rows) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar os dados", error: err.message });
    }

    res.status(200).json(rows);
  });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

console.log("Tentando conectar ao banco de dados...");
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
  } else {
    console.log("Banco de dados conectado com sucesso");
  }
});
