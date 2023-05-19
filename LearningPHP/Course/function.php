<?php 
// function is_even($number){
//   $result = $number %2;
//   if($result == 0){
//     echo "Number is even";
//   }else{
//     echo "Number is odd";
//   }
// }
// echo is_even(10);
// function hypo($a,$b){
//   $c = sqrt($a **2 + $b **2);
//   return $c;
// }
// echo hypo(3,4);
$username = "Bro The Code";
$phone = "0721-453-456";
$username = strtolower($username);
$username = strtoupper($username);
$username = str_pad($username, 20, "0");
$phone = str_replace("-" , " ", $phone );
$username = strrev($username);
$equals = strcmp($username, "BroCode");
$count = strlen($username);
$index =strpos($username, " ");
$first_name = substr($username, 0,3);
$last_name = substr($username, 4);
$fullname = explode(" ",$username);
foreach($fullname as $name){
  echo $name. "<br>";
}
echo $phone . "<br>";
echo $username."<br>";
echo $equals."<br>";
echo $count."<br>";
echo $index."<br>";
echo $first_name."<br>";
echo $last_name."<br>";
echo $fullname."<br>";
?>