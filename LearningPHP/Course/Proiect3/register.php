<?php
include("db.php");
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
<form action="" method="post">
    Username:<br>
    <input type="text" name="username"><br>
    Password:<br>
    <input type="password" name="password"><br>
    <input type="submit" name="submit" value="Register">
  </form>
  <h2>If you are alredy registerd press the login button</h2>
  <form action="login.php">
    <input type="submit" value="Login">
  </form>
</body>
</html>
<?php
if(isset($_POST["submit"])){
  $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
  $password = filter_input(INPUT_POST, "password" , FILTER_SANITIZE_SPECIAL_CHARS);
  if(empty($username)){
    echo"Enter a username!!!<br>";
  }elseif(empty($password)){
    echo"Enter a password!!!<br>";
  }else{
  $hash = password_hash($password, PASSWORD_DEFAULT);
  $sql = "INSERT INTO users(user, password) VALUES('$username', '$hash')";
  mysqli_query($conn, $sql);
  mysqli_close($conn);
}
}
?>