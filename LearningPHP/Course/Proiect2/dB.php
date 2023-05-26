<?php
$db_server = "localhost";
$db_user = "root";
$db_password = "";
$db = "proiect2";
$conn= "";

$conn = mysqli_connect($db_server,$db_user, $db_password, $db);
if($conn){
  echo "Good conection";
}else{
  echo"Error";
}
?>