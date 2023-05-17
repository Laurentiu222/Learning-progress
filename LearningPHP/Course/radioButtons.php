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
    <input type="radio" name="credit_card" value="Visa">
    Visa<br>
        <input type="radio" name="credit_card" value="MasterCard">
    MasterCard<br>
        <input type="radio" name="credit_card" value="American Express">
    American Express<br>
    <input type="submit" name="confirm" value="Confirm">
  </form>
</body>
</html>

<?php
if(isset($_POST["confirm"])){
  $credit_card = null;
  if(isset($_POST["credit_card"])){
    $credit_card = $_POST["credit_card"];
  }
  // if($credit_card == "Visa"){
  //   echo"You selected Visa";
  // }elseif($credit_card == "MasterCard"){
  //   echo"Yo uselected Master Card";
  // }elseif($credit_card == "American Express"){
  //   echo"You selected America Express";
  // }else{
  //   echo"Plase choose a credit card";
  // }
  switch($credit_card){
    case "Visa":
      echo"You selected Visa";
      break;
      case "MasterCard":
      echo"You selected MasterCard";
      break;
      case "American Express":
      echo"You selected American Express";
      break;
      default:
      echo"Plase choose a credit card";
      break;
  }
}
?>