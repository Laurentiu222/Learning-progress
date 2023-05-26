<?php

include("config.php");
if(isset($_POST['update'])){
  $first_name = $_POST['firstname'];
  $user_id = $_POST['id'];
  $last_name = $_POST['lastname'];
  $email= $_POST['email'];
  $gender = $_POST['gender'];
  $password = $_POST['password'];
  $sql = "UPDATE users SET firstname = '$first_name', lastname = '$last_name', email = '$email', password = '$password', gender = '$gender' WHERE id = '$user_id'";
  $result = mysqli_query($conn, $sql);
  if($result){
    echo"Record updated Succesfully";
  }else{
    echo"Error: " .$sql. "<br>" . $conn->error;
  }
}
if(isset($_GET['id'])){
  $user_id = $_GET['id'];
  $sql = "SELECT *FROM users WHERE 'id' = '$user_id'";
  $result = mysqli_query($conn, $sql);
  if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
      $firstname = $row['firstname'];
      $lastname = $row['lastname'];
      $email = $row['email'];
      $password = $row['password'];
      $gender = $row['gender'];
      $id = $row['id'];
    }
  }else{
    header('Location: view.php');
  }
  }
mysqli_close($conn);
    ?>
   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update</title>
   </head>
   <body>
   <h2>User Update Form</h2>
    <form action="" method="post">
      <label>Personal information:</label><br><br>
      First Name:<br>
      <input type="text" name="firstname" value="<?php echo $firstname; ?>"><br>
      <input type="hidden" name="id" value="<?php echo $id; ?>">
      Last Name:<br>
      <input type="text" name="lastname" value="<?php echo $lastname; ?>"><br>
      Email:<br>
      <input type="email" name="email" value="<?php echo $email; ?>"><br>
      Password:<br>
      <input type="password" name="password" value="<?php echo $password; ?>"><br>
      Gender:<br>
      <input type="radio" name="gender" value="Male" <?php if($gender == 'Male'){echo "checked";}?>>
      <input type="radio" name="gender" value="Female" <?php if($gender == 'Female'){echo "checked";}?>>
      <input type="radio" name="gender" value="Other" <?php if($gender == 'Other'){echo "checked";}?>><br><br>
      <input type="submit" name="update" value="Update">
    </form>
   </body>
   </html>
