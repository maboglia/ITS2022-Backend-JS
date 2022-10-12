<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-type: application/json");

$product = json_decode(file_get_contents('php://input'));

$mioFile = fopen("prodotti.txt", "a");
if(isset($product)) {

    fwrite($mioFile, json_encode($product) . "\n");
}
fclose($mioFile);

echo json_encode($product);