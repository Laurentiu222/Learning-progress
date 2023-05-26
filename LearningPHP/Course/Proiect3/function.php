<?php
include("nav.php");
?>
<?php
$correct = 0;
$guess = $_POST["guess"];
function fizz_buzz($number){
   global $correct;
  for($i=1;$i<=$number; $i++){
    if($i % 3==0 && $i % 5 == 0){
      echo "FizzBuzz<br>";
      $correct++;
    }elseif($i % 3 == 0){
      echo "Fizz<br>";
    }elseif($i % 5 == 0){
      echo"Buzz<br>";
    }else{
      echo $i . "<br>";
    }
  }
}
$number = $_POST["number"];
echo fizz_buzz($number);
if($correct == $guess){
  echo"You are good at math<br>";
}else{
  echo"Maybe next time<br>";
}
?>