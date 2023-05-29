<?php 
include("db.php");
$id = $_GET['id'];
$sql = "DELETE FROM `users` WHERE id=$id";
$result = mysqli_query($conn,$sql);
mysqli_close($conn);
if($result){
  header("Location: index.php");
}else{
  echo"Error: " .$conn->mysqli_error;
}
?>