<?php 

$utenti = [['name' => "Mario"], ['name' => "Luigi"], ['name' => "Pippo"]];

header("content-type: application/json");
header("Access-Control-Allow-Origin: *");

echo json_encode($utenti);