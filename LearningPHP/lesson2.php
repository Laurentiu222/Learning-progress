<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
  $name = '';
  $password ='';
  $gender = '';
  $color = '';
  $languges = [];
  $comments = '';
  $tc= '';

  if(isset($_POST['submit'])){
    if(isset($_POST['name'])){
      $name=$_POST['name'];
    };
    if(isset($_POST['password'])){
      $password=$_POST['password'];
    };
    if(isset($_POST['gender'])){
      $gender=$_POST['gender'];
    };
    if(isset($_POST['color'])){
      $color=$_POST['color'];
    };
    if(isset($_POST['languges'])){
      $languges=$_POST['languges'];
    };
    if(isset($_POST['comments'])){
      $comments=$_POST['comments'];
    };
    if(isset($_POST['tc'])){
      $tc=$_POST['tc'];
    };
    printf('User name: %s
    <br>Password: %s
    <br>Gender: %s
    <br>Color: %s
    <br>Languge(s): %s
    <br>Comments: %s
    <br>T&amp;C: %s',htmlspecialchars($name, ENT_QUOTES),
    htmlspecialchars($password, ENT_QUOTES),
    htmlspecialchars($gender, ENT_QUOTES),
    htmlspecialchars($color, ENT_QUOTES),
    htmlspecialchars(implode(' ',$languges), ENT_QUOTES),
    htmlspecialchars($comments, ENT_QUOTES),
    htmlspecialchars($tc, ENT_QUOTES),);


  }
  ?>
<form action="" method="post" >
    User name: <input type="text" name="name"><br>
    Password: <input type="password" name="password"><br>
    Gender: <input type="radio" name="gender" value="f">female
            <input type="radio" name="gender" value="m">male
            <input type="radio" name="gender" value="o">other<br>
    FAvorite color:
    <select name="color">
      <option value="">Please select</option>
      <option value="#f00">red</option>
      <option value="#0f0">green</option>
      <option value="#00f">blue</option>
    </select><br>
    Languages spoken:
    <select name="languges[]" multiple size="3";>
      <option value="en">English</option>
      <option vlaue="fr">Freanch</option>
      <option value="it">Italian</optinon>
    </select><br>
    Comments: <textarea name="comments"></textarea><br>
    <input type="checkbox" value="ok" name="tc">
    I accept the T&amp;C<br>
    <input type="submit" name="submit" value ="Register">
</body>
</html>