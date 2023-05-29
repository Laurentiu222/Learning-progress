<?php 
//Creating the connection to the database
$server_db = "localhost";
$user_db = "root";
$pass_db = "";
$db_name = "crud";
$conn = "";
$conn = mysqli_connect($server_db,$user_db,$pass_db,$db_name);
//Checking the connection to the database
if($conn->connect_error){
  die("Error: " . $conn->connect_error);
}
?>