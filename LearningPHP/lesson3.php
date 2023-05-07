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
  $password = '';
  $gender = '';
  $color = '';
  $languges = [];
  $comments = '';
  $tc = '';

  if (isset($_POST['submit'])) {
    $ok = true;

    if (!isset($_POST['name']) || $_POST['name']=== ''){
      $of = false;
    }else{
      $name = $_POST['name'];
    };
    if (!isset($_POST['password'])|| $_POST['password']=== '' ){
      $ok=false;}else{
      $password = $_POST['password'];
    };
    if (!isset($_POST['gender']) || $_POST['gender']=== ''){
      $ok=false;}else{
      $gender = $_POST['gender'];
    };
    if (!isset($_POST['color']) || $_POST['color']=== ''){
      $ok=false;}else{
      $color = $_POST['color'];
    };
    if (!isset($_POST['languges']) || !is_array($_POST['languges']) || count($_POST['languges']) ===0) {
      $ok=false;}else{
      $languges = $_POST['languges'];
    };
    if (!isset($_POST['comments'])|| $_POST['comments']=== '' ) {
      $ok=false;}else{
      $comments = $_POST['comments'];
    };
    if (!isset($_POST['tc'])|| $_POST['tc']=== '' ) {
      $ok=false;}else{
      $tc = $_POST['tc'];
    };
    if ($ok) {
      printf(
        'User name: %s
    <br>Password: %s
    <br>Gender: %s
    <br>Color: %s
    <br>Languge(s): %s
    <br>Comments: %s
    <br>T&amp;C: %s',
        htmlspecialchars($name, ENT_QUOTES),
        htmlspecialchars($password, ENT_QUOTES),
        htmlspecialchars($gender, ENT_QUOTES),
        htmlspecialchars($color, ENT_QUOTES),
        htmlspecialchars(implode(' ', $languges), ENT_QUOTES),
        htmlspecialchars($comments, ENT_QUOTES),
        htmlspecialchars($tc, ENT_QUOTES),
      );
    }
  }
  ?>
  <form action="" method="post">
    User name: <input type="text" name="name" value="<?php echo htmlspecialchars($name,ENT_QUOTES); ?>"><br>
    Password: <input type="password" name="password"><br>
    Gender: <input type="radio" name="gender" value="f"<?php 
    if($gender === 'f'){
      echo ' checked'; 
    }
    ?>>female
    <input type="radio" name="gender" value="m"<?php 
    if($gender === 'm'){
      echo ' checked'; 
    }
    ?>>male
    <input type="radio" name="gender" value="o"<?php 
    if($gender === 'o'){
      echo ' checked'; 
    }
    ?>>other<br>
    FAvorite color:
    <select name="color">
      <option value="">Please select</option>
      <option value="#f00"<?php
      if($color ==='#f00'){
        echo ' selected';
      }
      ?>>red</option>
      <option value="#0f0"<?php
      if($color ==='#0f0'){
        echo ' selected';
      }
      ?>>green</option>
      <option value="#00f"<?php
      if($color ==='#00f'){
        echo ' selected';
      }
      ?>>blue</option>
    </select><br>
    Languages spoken:
    <select name="languges[]" multiple size="3" ;>
      <option value="en"<?php
      if(in_array('en', $languges)){
        echo ' selected';
      }
      ?>>English</option>
      <option vlaue="fr"<?php
      if(in_array('fr', $languges)){
        echo ' selected';
      }
      ?>>Freanch</option>
      <option value="it"<?php
      if(in_array('it', $languges)){
        echo ' selected';
      }
      ?>>Italian</optinon>
    </select><br>
    Comments: <textarea name="comments"><?php echo htmlspecialchars($comments,ENT_QUOTES) ?></textarea><br>
    <input type="checkbox" name="tc" value="ok" <?php if($tc === 'ok'){
      echo ' checked';
    } ?>>
    I accept the T&amp;C<br>
    <input type="submit" name="submit" value="Register">
</body>

</html>