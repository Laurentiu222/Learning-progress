<?php 
include("config.php");
if(isset($_GET['id'])){
  $user_id = $_GET['id'];
  $sql = "DELETE FROM users WHERE 'id' = '$user_id'";
  $result = mysqli_query($conn, $sql);
  if($result){
    echo "Record deleted successfully";
    header('Location: view.php');
  }else{
    echo"Error" .$sql . $conn->error;
  }
}
?>