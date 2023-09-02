const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar o middleware para análise de JSON e URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Conectar ao banco de dados MongoDB (certifique-se de iniciar o MongoDB)
mongoose.connect('mongodb+srv://armvsoftware:124578@cluster0.hbgbzlc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir um modelo para os emails
const Email = mongoose.model('Email', {
  email: String,
});

// Rota para receber inscrições
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email é obrigatório' });
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).json({ message: 'Inscrição realizada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar o email' });
  }
});

// Rota para enviar promoções (exemplo)
app.post('/send-promotions', async (req, res) => {
  const { subject, message } = req.body;

  if (!subject || !message) {
    return res.status(400).json({ error: 'Assunto e mensagem são obrigatórios' });
  }

  try {
    const emails = await Email.find({}, 'email');

    // Configuração do transporte de e-mail com Nodemailer (configure suas credenciais)
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'deadoralive@gmail.com',
        pass: 'senha',
      },
    });

    // Envio de e-mail para cada endereço na lista de e-mails
    for (const email of emails) {
      const mailOptions = {
        from: 'deadoralive@gmail.com',
        to: email.email,
        subject: subject,
        text: message,
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(200).json({ message: 'Promoções enviadas com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar promoções' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`http://locallhost/3000/`);
});
