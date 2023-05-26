<?php
include("db.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <title>Create</title>
</head>
<body>
<nav class="navbar navbar-light justify-content-center fs-3 mb-5" style="background-color: red;">
    PHP Complete CRUD Application
  </nav>
  <h3 class="text-center mb-4">Add new user</h3><br><br>
  <form action="" method="post" class="container" style="width:10vw; min-width:300px;">
    <label >Register</label><br>
    Frist Name:<br>
    <input type="text" name="firstname" required><br>
    Last Name:<br>
    <input type="text" name="lastname" required><br>
    Email:<br>
    <input type="email" name="email" required><br>
    Gender:<br>
    <input type="radio" name="gender" value="male">Male<br>
    <input type="radio" name="gender" value="female">Female<br><br>
    <input type="submit" name="submit" value="Register">
  </form>
</body>
</html>

<?php 
if(isset($_POST["submit"])){
  $firstname = filter_input(INPUT_POST, 'firstname' , FILTER_SANITIZE_SPECIAL_CHARS);
  $lastname = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_SPECIAL_CHARS);
  $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
  $gender = $_POST["gender"];
  $sql = "INSERT INTO users(	first_name, last_name, email, gender) VALUES('$firstname', '$lastname' , '$email', '$gender')";
  $result = mysqli_query($conn, $sql);
  mysqli_close($conn);
  if($result){
    header("Location: index.php");
  }else{
    echo "Failed: " .mysqli_error($conn);
  }
}
?>