<?php 
header('Content-Type: application/json'); 
$conexao = require('conexao.php'); //PDO 

$nome = $_POST['name']; //Chaves providas pelo JSON 
$email = $_POST['em']; 

$insert = $conexao->prepare('INSERT INTO contato (nome, email) VALUES(:n, :e)'); 
$insert->bindValue(':n', $nome);
$insert->bindValue(':e', $email);
$insert->execute(); 

    if($insert->rowCount() >= 1 ){
         echo json_encode ('Inserção com sucesso'); 
    }else{
        echo json_encode ('Falha ao inserir'); 
    }






