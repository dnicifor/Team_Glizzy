<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT c.CertificationName, c.CertifyingAgency, p.FirstName, p.LastName, ca.AssignmentDate, c.ExpirationPeriod
from People p, Certifications c, CertificationAssignment ca
where p.PersonID = ca.PersonID and c.CertificationID = ca.CertificationID
order by c.CertificationID;';
$vars = [];

/*if (isset($_GET['guid'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM Patient WHERE patientGuid = ?';
  $vars = [ $_GET['guid'] ];
}*/

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$certifications = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certifications, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
