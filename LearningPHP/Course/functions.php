<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- <form action="" method="post">
    <label>x</label>
    <input type="text" name="x">
    <label>y</label>
    <input type="text" name="y">
    <label>z</label>
    <input type="text" name="z">
    <input type="submit" value="total">
  </form> -->
  <form action="" method="post">
    <label>Radius</label><br>
    <input type="text" name="radius"><br>
    <input type="submit" value="calculate">
  </form>
</body>
</html>
<?php 
//  $x = $_POST["x"];
//  $y = $_POST["y"];
//  $z = $_POST["z"];
//   $total = null;
  //$total = abs($x); //absolute value of that number
  //$total= round($x); rounding a number
  //$total= floor($x); //rounding down a number
  //$total= ceil($x);//rounding up a number
  //$total = pow($x , $y); // power function
  //$total = sqrt($x); // square root
  //$total = max($x ,$y,$z); //max number fro mthe 3 var
  //$total = min($x ,$y,$z);//min number fro mthe 3 var
  //$total = pi(); //printing pi
  //$total = rand(1,100); // random number
 //echo $total;
 $radius= $_POST["radius"];
 $circ = null;
$area = null;
$volum = null;
 $circ = 2* pi()* $radius;
 $circ = round($circ, 2);
 $area = pi() *pow($radius , 2);
  $area = round($area,2);
  $volum = 4/3 *pi() * pow($radius,3);
  $volum = round($volum,2);
 echo"Circumference = {$circ}cm <br>"; 
 echo"Area is: {$area}cm<br>";
 echo"Volum is: {$volum}cm<br>";
?>