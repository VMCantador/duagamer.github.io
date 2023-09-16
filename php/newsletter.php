<?php
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
        echo 'Inscrição realizada com sucesso!';
    } else {
        echo 'Erro ao processar a inscrição.';
    }

    $stmt->close();
    $mysqli->close();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Inscrição na Newsletter</title>
</head>
<body>
    <h1>Inscrição na Newsletter</h1>
    <form method="post">
        <label for="email">Email:</label>
        <input type="email" name="email" required>
        <input type="submit" value="Inscrever">
    </form>
</body>
</html>
