 <?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "locations";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM maps";
$result = $conn->query($sql);
$rows = array();
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $rows[] = $row;
   // echo "id: " . $row["id"]. " - Name: " . $row["lat"]. " " . $row["lng"]. "<br>";
  
}

print json_encode($rows);


} else {
  echo "0 results";
}
$conn->close();
?>