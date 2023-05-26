<?php 
$server_db ="localhost";
$user_db = "root";
$pass = "";
$name_db="crud";
$conn='';
$conn= mysqli_connect($server_db,$user_db,$pass,$name_db);
if($conn->connect_error){
  die("Error" . $conn->connect_error);
}
?>