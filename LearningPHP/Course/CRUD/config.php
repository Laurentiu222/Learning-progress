<?php
$server_db = "localhost";
$user_db = "root";
$pass_db = "";
$name_db ="mydb";
$conn ="";

$conn= mysqli_connect($server_db,$user_db,$pass_db,$name_db);
if($conn -> connect_error){
  die("Connection failed" .$conn->connect_error);
}else{
  //echo"Sucsesfull";
}
?>