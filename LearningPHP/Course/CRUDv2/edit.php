<?php 
include("db.php");

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <title>Update</title>
</head>
<body>
  <?php 
  $id = $_GET['id'];
  $sql = "SELECT * FROM `users` WHERE id = $id LIMIT 1";
  $result =mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  ?>
  <nav class="navbar navbar-light justify-content-center fs-3 mb-5" style="background-color: red;">CRUD APLICATION</nav>
  <h2 class="text-center mb-4">Edit page</h2>
  <form action="" method="post" class="container text-center mb-4" style="width:5vw; min-width:300px;">
    Frist Name:<br>
    <input type="text" name="fristname" required value="<?php echo $row["first_name"]; ?>"><br>
    Last Name:<br>
    <input type="text" name="lastname" required value="<?php echo $row["last_name"] ?>"><br>
    Email:<br>
    <input type="email" name="email" required value="<?php echo $row["email"] ?>"><br>
    <input type="radio" name="gender" value="male" <?php if($row['gender'] == "male"){echo "checked";} ?>>Male<br>
    <input type="radio" name="gender" value="female" <?php if($row['gender']== "female"){echo "checked";} ?>>Female<br>
    <input type="submit" name="submit" value="Update">
  </form>  
</body>
</html>


<?php 
//checking if the submit button was pressed
if(isset($_POST['submit'])){
  //storing the values inside variabels which are SANITIZE to stop cross scripting
  $firstname = filter_input(INPUT_POST, 'fristname', FILTER_SANITIZE_SPECIAL_CHARS);
  $lastname = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_SPECIAL_CHARS);
  $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
  $gender = $_POST['gender'];
  //creating the sql querry
  $sql = "UPDATE `users` SET `first_name`=' $firstname',`last_name`='$lastname',`email`='$email',`gender`='$gender' WHERE id=$id";
  $result = mysqli_query($conn, $sql);
  mysqli_close($conn);
  //if the result is true => redirection to index.php(the view/read page)
  if($result){
    header("Location: index.php");
  }else{
    echo"Error: " . $conn->connect_error;
  }
}

?>