<?php
$db_server = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "proiect3";
$conn= "";
$conn = mysqli_connect($db_server,$db_user,$db_pass,$db_name);
if($conn ->connect_error){
  die("Error". $conn->connect_error);
}else{
  echo"Connection succsesfully";
}

?>