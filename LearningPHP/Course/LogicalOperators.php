<?php
// $temp = 15;
// $cloudy =true;
// if($temp >= 0 && $temp <=30){
//   echo "The wether is good<br>";
// }else{
//   echo"The wether is bad<br>";
// }
// if($temp < 0 || $temp >30){
//   echo "The wether is bad<br>";
// }else{
//   echo"The wether is good<br>";
// }
// if(!$cloudy){
//   echo"It s cloudy<br>";
// }else{
//   echo"It,s sunny<br>";
// }
// $age = 22;
// $citizen =true;

// if($age >=18 && $citizen){
//   echo"You can vote";
// }else{
//   echo"You can not vote";
// }
$child = true;
$senior = false;
$ticket = null;
if($child || $senior){
  $ticket = 10;
}else{
  $ticket = 15;
}
echo"The ticket price is \${$ticket}";
?>