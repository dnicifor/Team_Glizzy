<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Members';
$vars = [];

// $sql = 'SELECT p.FirstName, p.LastName, p.Email, p.PhoneNumber, p.DateOfBirth, p.StartDate, p.Gender, p.RadioNumber, p.StationNumber, p.ActiveStatus
// from People p
// ORDER BY p.StationNumber asc; ';
// $vars = [];

  // $_GET['FirstName']
  // $_GET['LastName']
  // $_GET['Email']
  // $_GET['PhoneNumber']
  // $_GET['DateOfBirth']
  // $_GET['StartDate']
  // $_GET['Gender']
  // $_GET['RadioNumber']
  // $_GET['StationNumber']
  // $_GET['ActiveStatus']
  // ;

// if (isset($_GET['guid'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT * FROM Patient WHERE patientGuid = ?';
//   $vars = [ $_GET['guid'] ];
// }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$memreport = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($memreport, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
