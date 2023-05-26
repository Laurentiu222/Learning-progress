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
  <form action="index.php" method="post">
    Username:<br>
    <input type="text" name="username"><br>
    Password:<br>
    <input type="password" name="password"><br>
    <input type="submit" name="submit" value="Login">
  </form>
</body>
</html>
<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
  $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
  $password = filter_input(INPUT_POST, "password" , FILTER_SANITIZE_SPECIAL_CHARS);
  if(empty($username)){
    echo"Please enter a username<br>";
  }elseif(empty($password)){
    echo"Plse enter a password<br>";
  }elseif($conn){
    $sql =$mysqli->query ("SELECT* FROM users WHERE user='$username' AND password='$password' AND active ='0'");
    if($sql->num_rows == 1){
      $mysqli->query("UPDATE users SET active ='1' WHERE user= '$username'");
      header("location: index.php");
    }
    mysqli_query($conn, $sql);
    mysqli_close($conn);
  }
}
?>