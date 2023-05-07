<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="style.css" , rel="stylesheet" type="text/css" />
  <title>Document</title>
</head>
<body>
<!-- // echo htmlspecialchars($_POST['name'], ENT_QUOTES);
    // echo "\n";
    // echo $_POST['password'];
    // echo "\n";
    // echo $_POST['gender'];
    // echo "\n";
    // echo $_POST['country'];
    // echo "\n";
    // echo implode($_POST['color']);
    // echo "\n";
    // echo $_POST['mess'];
    // echo "\n";
    // echo $_POST['tc']; -->
  <?php
  $name = '';
  $password = '';
  $gender = '';
  $country = '';
  $color = [];
  $mess = '';
  $tc ='';
  $ok =true;
  if(isset($_POST['submit'])){
    if(!isset($_POST['name'])|| $_POST['name']=== '' ){
      $of = false;
    }else{
      $name = $_POST['name'];
    }
    if(!isset($_POST['password'])|| $_POST['password']=== ''){
      $of = false;
    }else{
      $password = $_POST['password'];
    }
    if(!isset($_POST['gender'])|| $_POST['gender']=== ''){
      $of = false;
    }else{
      $gender = $_POST['gender'];
    }
    if(!isset($_POST['country'])|| $_POST['country']=== ''){
      $of = false;
    }else{
      $country = $_POST['country'];
    }
    if(!isset($_POST['color'])|| $_POST['color']=== ''){
      $of = false;
    }else{
      $color = $_POST['color'];
    }
    if(!isset($_POST['mess'])|| $_POST['mess']=== ''){
      $of = false;
    }else{
      $mess = $_POST['mess'];
    }
    if(!isset($_POST['tc'])|| $_POST['tc']=== ''){
      $of = false;
    }else{
      $tc = $_POST['tc'];
    }
  }
  if($ok){
  printf('USerName: %s<br>
          Password: %s<br>
          Gender: %s<br>
          Country: %s<br>
          Color(s): %s<br>
          Messege:%s<br>
          Terms:%s<br>',htmlspecialchars($name,ENT_QUOTES),htmlspecialchars($password, ENT_QUOTES), htmlspecialchars($gender,ENT_QUOTES), htmlspecialchars($country,ENT_QUOTES), htmlspecialchars(implode(' ',$color),ENT_QUOTES),htmlspecialchars($mess,ENT_QUOTES),htmlspecialchars($tc,ENT_QUOTES));
  }
  ?>
  <header>
    <h1>Welcome to GreenLands</h1>
    <h3>Please complete the next forum to register</h3>
  </header>
  <form action="" method="post">
    UserName: <input type="text" name="name"><?php
    echo htmlspecialchars($name);
    ?><br>
    Password: <input type="password" name="password"><br>
    <div class="gen">
    Gender: <input type="radio" name="gender" value="m" <?php 
    if($gender === 'm'){
      echo ' checked';
    }
    ?>>Male
            <input type="radio" name="gender" value="f"<?php 
    if($gender === 'f'){
      echo ' checked';
    }
    ?>>Female
            <input type="radio" name="gender" value="o"<?php 
    if($gender === 'o'){
      echo ' checked';
    }
    ?>>Other<br></div><br>
    Country: <select name="country">
      <option value="en"<?php 
    if($country === 'en'){
      echo ' checked';
    }
    ?>>English</option>
      <option value="fr"<?php 
    if($country === 'fr'){
      echo ' checked';
    }
    ?>>France</option>
      <option value="it"<?php 
    if($country === 'it'){
      echo ' checked';
    }
    ?>>Italy</option>
      <option value="sw"<?php 
    if($country === 'sw'){
      echo ' checked';
    }
    ?>>Sweden</option>
    </select><br>
    Color(s) you prefer: <select name="color[]", multiple size="3">
      <option value=red<?php 
    if(in_array('red',$color)){
      echo ' selected';
    }
    ?>>Red</option>
      <option value="blue"<?php 
    if(in_array('blue',$color)){
      echo ' selected';
    }
    ?>>Blue</option>
      <option value="green"<?php 
    if(in_array('green',$color)){
      echo ' selected';
    }
    ?>>Green</option>
    </select><br>
    Leave us a message: <textarea name="mess"></textarea><br>
    I accept the T&amp;C
    <input type="checkbox" value="ok" name="tc"><br>
    <input type="submit" name="submit" value ="Register">
  </form>
</body>
</html>