<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="" method="post">
Username:<br>
<input type="text" name="username"><br>
Age:<br>
<input type="text" name="age"><br>
email:<br>
<input type="text" name="email"><br>
<input type="submit" name="login" value="Log In"><br>
  </form>
</body>
</html>

<?php 
if(isset($_POST["login"])){
  // $username = htmlspecialchars($_POST["username"]);
  // $age = htmlspecialchars($_POST["age"]);
  // $email = filter_input(INPUT_POST,"email", FILTER_SANITIZE_EMAIL);
  // echo"Hello {$username} , {$age} years old<br>";
  // echo "Your email is: {$email}";
  $age = filter_input(INPUT_POST, "age", FILTER_VALIDATE_INT);
  $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
  if(empty($age)){
    echo"That number isn't a number<br>";
  }else{
    echo"You are {$age} years old<br>";
  }
  if(empty($email)){
    echo"That email isn't valid<br>";
  }else{
    echo"Your email is: {$email}<br>";
  }
}

?>