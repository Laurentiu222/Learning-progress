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
    <label>UserName: </label>
    <input type="text" name="username"><br>
    <label>Password: </label>
    <input type="password" name="password"><br>
    <input type="submit" value="Log in" name="login"><br>
  </form>
</body>
</html>

<?php 
// isset() = Returns TRUE if a variable is  declared(true,false, empty string) and not null
// empty() = Returns TRUE if a variable is not declared, false, null or ""
// $username = "BroCOde";
// if(isset($username)){
//   echo"This var is set<br>";
// }else{
//   echo "This var is not set<br>"; 
// }
// if(empty($username)){
//   echo"This var is empty<br>";
// }else{
//   echo "This var is not empty<br>"; 
// }
// foreach($_POST as $key => $value){
//   echo"{$key} = {$value} <br>";
// }
if(isset($_POST["login"])){
  $username = $_POST["username"];
  $password = $_POST["password"];
  if(empty($username)){
    echo"Username is missing<br>";
  }elseif(empty($password)){
    echo"Password is missing<br>";
  }
  else{
    echo"Hello, There {$username}<br>";
  }

}
?>