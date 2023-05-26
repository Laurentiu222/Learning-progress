<?php
include("nav.php");
include("config.php");
$sql = "SELECT *FROM `users`";

$result = mysqli_query($conn, $sql);
mysqli_close($conn);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
  <title>View Page</title>
</head>
<body>
  <div class="container my-5">
    <h2>Users</h2>
    <table class="table">
      <head>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      </head>
      <tbody>
      <?php 
if($result->num_rows>0){
  while($row = $result->fetch_assoc()){

  

?>
        <tr>
          <td><?php echo $row['id']; ?></td>
          <td><?php echo $row['firstname']; ?></td>
          <td><?php echo $row['lastname']; ?></td>
          <td><?php echo $row['email']; ?></td>
          <td><?php echo $row['gender']; ?></td>
          <td> <a class="btn btn-primary" href="update.php">
          Edit</a>
          <a class="btn btn-danger" href="delete.php">
          Delete</a></td>
        </tr>
        <?php  }
        }?>
      </tbody>
    </table>
  </div>
</body>
</html>