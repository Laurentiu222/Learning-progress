<?php
$server_db = "localhost";
$user_db = "root";
$pass_db = "";
$project_db = "proiect2";
$conn = "";

$conn = mysqli_connect($server_db,$user_db,$pass_db,$project_db);
if($conn){
  echo"Good conection";
}else{
  echo"Bad connection";
}
?>