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
  <title>Create</title>
</head>
<body>
  <nav class="navbar navbar-light justify-content-center fs-3 mb-5" style="background-color: red;">CRUD APLICATION</nav>
  <h2 class="text-center mb-4">Register page</h2>
  <form action="" method="post" class="container text-center mb-4" style="width:5vw; min-width:300px;">
    Frist Name:<br>
    <input type="text" name="fristname" required><br>
    Last Name:<br>
    <input type="text" name="lastname" required><br>
    Email:<br>
    <input type="email" name="email" required><br>
    <input type="radio" name="gender" value="male">Male
    <input type="radio" name="gender" value="female">Female<br><br>
    <input type="submit" name="submit" value="submit">
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
  $sql = "INSERT INTO `users`(`first_name`, `last_name`, `email`, `gender`) VALUES ('$firstname','$lastname','$email','$gender ')";
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