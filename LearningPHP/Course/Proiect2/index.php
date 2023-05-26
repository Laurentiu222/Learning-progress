<?php 

include("dB.php");

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
  <h2>Welcome to the Registration page</h2>
  <form action="" method="post">
    Username:<br>
    <input type="text"  name="username"><br>
    Password:<br>
    <input type="password" name="password"><br>
    <input type="submit" name="submit" value="Register"><br>
  </form>
</body>
</html>
<?php 
if($_SERVER["REQUEST_METHOD"] == "POST"){
  $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
  $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
  if(empty($username)){
    echo"Please enter a userneame!!!";
  }elseif(empty($password)){
    echo"Please enter a password!!!";
  }else{
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users(user, password) VALUES('$username', '$hash')";
           
    mysqli_query($conn, $sql);
    echo"Registration completed";
    mysqli_close($conn);
  }
}
?>