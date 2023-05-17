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
    <label>Enter a Country: </label>
    <input type="text" name="country">
    <input type="submit">
  </form>
</body>
</html>
<?php 
// $foods = array("apple","banana", "orange", "coconat");
// //$foods[0] = "pineapple";
// array_push($foods, "pineapple", "kiwi");
// array_pop($foods);
// array_shift($foods);
// array_unshift($foods);

// echo count($foods) . "<br>";
// $revesred_foods = array_reverse($foods);
// foreach($foods as $food){
//   echo $food . "<br>";
// }
// foreach($revesred_foods as $food){
//   echo $food . "<br>";
// }
 $capitals = array("USA"=>"Washigton DC" , "Japan"=>"Tokyo" , "Korea"=>"Seoul" , "India"=>"New Delhi");
 //$capitals["USA"] = "Las Vegas";
 //$capitals["China"] = "Beijing";
 //array_pop($capitals);
 //$keys = array_keys($capitals);
 //$values = array_values($capitals);
 //$capitals = array_flip($capitals);
//  $capitals = array_reverse($capitals);
//  foreach($capitals as $key => $value){
//   echo"{$key}=>{$value} <br>";
//  }
$capital = $capitals[$_POST["country"]];
echo $capital;
?>