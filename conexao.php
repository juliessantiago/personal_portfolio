<?php 
//Conexão 
try {
    $pdo = new PDO('mysql:host=localhost;dbname=portfolio', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      echo ('Conexão realizada'); 

    }catch(PDOException $error) {
        
        echo 'Não foi possível conectar: ' . $error->getMessage();
    }



