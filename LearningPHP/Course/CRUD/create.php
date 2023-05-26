<?php
include("nav.php");
include("config.php");
if(isset($_POST['submit'])){
  $first_name= filter_input(INPUT_POST, "firstname" , FILTER_SANITIZE_SPECIAL_CHARS);
  $last_name = filter_input(INPUT_POST, "lastname", FILTER_SANITIZE_SPECIAL_CHARS);
  $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
  $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
  $gender = $_POST['gender'];
  $sql= "INSERT INTO users(firstname,lastname, email, password, gender) VALUES('$first_name', '$last_name', '$email','$password', '$gender')";
  $result = mysqli_query($conn,$sql);
  if($result){
    echo"New record created<br>";
  }else{
    echo"Error: " .$sql . "<br>" . $conn->error;
  }
  mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h2>Signup Form</h2>
  <form action="" method="post">
    <label>Personal Infromation:</label><br><br>
    First Name:<br>
    <input type="text" name="firstname"><br>
    Last Name:<br>
    <input type="text" name="lastname"><br>
    Email:<br>
    <input type="email" name="email"><br>
    Password:<br>
    <input type="password" name="password"><br>
    Gender:<br>
    <input type="radio" name="gender" value="male">Male
    <input type="radio" name="gender" value="female">Female
    <input type="radio" name="gender" value="other">Other<br><br>
    <input type="submit" name="submit" value="Submit">
  </form>
</body>
</html>
