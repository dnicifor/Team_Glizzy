<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT p.FirstName, p.LastName, c.CertificationName
from People p, Certifications c, CertificationAssignment ca
WHERE p.PersonID=ca.PersonID and c.CertificationID=ca.CertificationID and
CURDATE() > DATE_ADD(ca.AssignmentDate, INTERVAL c.ExpirationPeriod YEAR)
ORDER BY c.CertificationName ASC; ';
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
