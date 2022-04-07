<?php
include("./model/Conexao.php");
date_default_timezone_set('America/Sao_Paulo');


if (!isset($_SESSION)) {
  session_start();
}
echo "Seu chamado foi criado com sucesso!!";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $data = $_POST;
  echo "<pre>";
  var_dump($data);
  echo "<pre>";
}else{
  echo "Erro ao criar o chamado, tente novamente!";
}