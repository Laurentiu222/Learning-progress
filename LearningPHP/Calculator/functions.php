<?php
function myCalculator($num1, $oper,$num2){
  $sum = 0;
  if($oper == "add"){
    $sum = $num1 + $num2;
  }elseif($oper == "sub"){
    $sum = $num1 - $num2;
  }elseif($oper == "multy"){
    $sum = $num1*$num2;
  }elseif($oper== "divide"){
    $sum = $num1/$num2;
  }
  else{
    return  "Error";
  }
  return $sum;
}
$num1=$_GET["num1"];
$num2 = $_GET["num2"];
$oper=$_GET["oper"];
echo "Value: " .myCalculator($num1, $oper,$num2);