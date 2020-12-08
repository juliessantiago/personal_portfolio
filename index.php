<?php 

header('Content-Type: application/json'); 
header ('Content-Type com o valor application/x-www-form-urlencoded'); 

$nome = $_POST['key_nome']; //Chaves providas pelo JSON 
$email = $_POST['key_email'];
$mensagem = $_POST['key_mensagem']; 

$pdo = new PDO('mysql:host=localhost;dbname=portfolio', 'root', '');

$insert = $pdo->prepare('INSERT INTO contato (nome, email, mensagem) 
VALUES(:n, :e, :msg)'); 

$insert->bindValue(':n', $nome);
$insert->bindValue(':e', $email);
$insert->bindValue(':msg', $mensagem); 
$insert->execute(); 

    if($insert->rowCount() >= 1 ){
         echo json_encode('Dados inseridos'); 
    }else {
       echo json_encode('Erro ao inserir no banco'); 
    } 






