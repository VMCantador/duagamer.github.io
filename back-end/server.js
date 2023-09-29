const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

// Configuração do MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'newsletter'
});

// Conecta-se ao MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Middleware para análise do corpo das solicitações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware para habilitar o CORS
app.use(cors()); // Use o middleware CORS

// Rota para lidar com a inscrição
app.post('/inscrever', (req, res) => {
    const { email } = req.body;

    const query = 'INSERT INTO subscribers (email) VALUES (?)';
    db.query(query, [email], (err, result) => {
        if (err) {
            res.status(500).send('Erro ao realizar a inscrição.');
            throw err;
        }
        res.status(200).send('Inscrição realizada com sucesso!');
    });
});

// Rota para lidar com as mensagens de contato
app.post('/contato', (req, res) => {
    const { name, email, phone, service, message } = req.body;

    // Aqui você pode adicionar código para salvar a mensagem em seu banco de dados

    const query = 'INSERT INTO messages (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, email, phone, service, message], (err, result) => {
        if (err) {
            console.error('Erro ao enviar a mensagem:', err);
            res.status(500).send('Erro ao enviar a mensagem.');
            throw err;
        }
        console.log('Mensagem enviada com sucesso!');
        res.status(200).send('Mensagem enviada com sucesso!');
    });
});


// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor em execução na porta ${port}`);
});
