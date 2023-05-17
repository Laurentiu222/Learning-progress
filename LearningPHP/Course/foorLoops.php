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
    <label>Enter a number to count to: </label>
    <input type="text" name="counter">
    <label>Enter a number to count down from: </label>
    <input type="text" name="down">
    <input type="submit" value="start">  
  </form>
</body>
</html>
<?php 
$counter = $_POST['counter'];
$down = $_POST['down'];
for($i=0;$i<=$counter;$i++){
  echo"{$i}<br>";
}
for($j=$down;$j>0;$j--){
  echo"{$j}<br>";
}



?>