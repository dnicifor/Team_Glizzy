<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT People.PersonID, Certifications.CertificationID
        FROM People, Certifications
        WHERE  People.PersonID = Certifications.CertificationID
        ORDER BY CertificationID, DESC ';
$vars = []
  $_GET['PersonID']
  $_GET['CertificationID']
;

// if (isset($_GET['guid'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT * FROM Patient WHERE patientGuid = ?';
//   $vars = [ $_GET['guid'] ];
// }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$memcert = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($memcert, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
