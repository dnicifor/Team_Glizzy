<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT p.StationNumber, p.RadioNumber, p.FirstName, p.LastName, p.Email
from People p
ORDER BY p.StationNumber asc; ';
$vars = [];
//
//   $_GET['FirstName']
//   $_GET['LastName']
//   $_GET['CertificationName'];

// if (isset($_GET['guid'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT * FROM Patient WHERE patientGuid = ?';
//   $vars = [ $_GET['guid'] ];
// }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$reports = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($reports, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
