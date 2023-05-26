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
    <select name="color">Favorite color:<br>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="yelow">Yelow</option>
    </select><br><br>
    <input type="submit" name="submit" value="Submit">
  </form>
</body>
</html>
<?php
if($_POST["submit"]){
  $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
  $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
  $color = $_POST["color"];
  if(empty($username)){
    echo"Please add a username!!!";
  }elseif(empty($password)){
    echo"Plase add a password!!!";
  }else{
    echo"Form submited";
    $hash= password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO user(username, password, color) VALUES('$username', '$hash', '$color')";
    mysqli_query($conn,$sql);
    mysqli_close($conn);
  }
  
}

?>