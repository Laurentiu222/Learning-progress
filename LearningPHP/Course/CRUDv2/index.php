<?php
//adding the database to the Crate base with include function 
include("db.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <title>View</title>
</head>
<body>
<nav class="navbar navbar-light justify-content-center fs-3 mb-5" style="background-color: red;">CRUD APLICATION</nav>
  <a href="create.php" class="btn btn-dark mb-3">Add New</a>
<table class="table table-hover text-center mb-3">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  <th><?php
      $sql = "SELECT * FROM `users`";
      $result = mysqli_query($conn,$sql);
      while($row = mysqli_fetch_assoc($result)){
      ?></th>
    <tr>
      <td><?php echo $row['id'] ?></td>
      <td><?php echo $row['first_name'] ?></td>
      <td><?php echo $row['last_name'] ?></td>
      <td><?php echo $row['email'] ?></td>
      <td><?php echo $row['gender'] ?></td>
      <td><a href="edit.php?id=<?php echo $row['id'];?>">Edit</a>
          <a href="delete.php?id=<?php echo $row['id'];?>">Delete</a></td>
      <?php
      }
      ?>
    </tr>
  </tbody>
</table>
</body>
</html>