<?php
$message = ''; // Variável para armazenar a mensagem de sucesso

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];

    // Conectar-se ao banco de dados MySQL
    $mysqli = new mysqli('localhost', 'root', '', 'newsletter');

    // Verificar a conexão
    if ($mysqli->connect_error) {
        die('Erro ao conectar ao MySQL: ' . $mysqli->connect_error);
    }

    // Inserir o email na tabela subscribers
    $sql = "INSERT INTO subscribers (email) VALUES (?)";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param('s', $email);

    if ($stmt->execute()) {
        $message = 'Inscrição realizada com sucesso!';
    } else {
        $message = 'Erro ao processar a inscrição.';
    }

    $stmt->close();
    $mysqli->close();
}
?>
