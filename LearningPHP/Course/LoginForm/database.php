
<?php 
#businessdb
  $db_server = "localhost";
  $db_user = "root";
  $db_pass = "";
  $db_name = "proiect";
  $conn = "";
  try{
  $conn = mysqli_connect($db_server, $db_user,$db_pass, $db_name);
}
catch(mysqli_sql_exception){
  echo "Error";
}
  if($conn){
    echo"You are conencted<br>";
  }
?>