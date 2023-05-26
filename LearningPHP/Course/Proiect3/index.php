<?php
include("nav.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h2>Welcome to FizzBuzz Game</h2>
  <h3>Enter a number and a list will apper with fizz and buzz for every number divizibel with 3 or 5</h3>
  <form action="function.php" method="post">
    Enter you number:<br>
    <input type="text" name="number"><br><br>
    Guess how many fizzbuzz will be:<br>
    <input type="text" name="guess"><br>
    <input type="submit" name="submit" value="Submit">
  </form>
</body>
</html>