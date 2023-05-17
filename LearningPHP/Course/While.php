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
<input type="submit" value="Stop" name="button">
  </form>
</body>
</html>
<?php 
$seconds =0;
$running = true;
$button = $_POST['button'];
while($running){
  if(isset($button)){
    $running = false;
  }else{
    $seconds++;
echo"{$seconds} <br>";
  }
}

?>