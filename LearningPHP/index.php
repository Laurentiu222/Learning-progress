<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
  // if(isset($_POST['searchterm'])){
  //   // insecure!!!!!!
  //   echo $_POST['searchterm'];
  // }
  if(isset($_POST['searchterm'])){
    echo htmlspecialchars($_POST['searchterm'], ENT_QUOTES);
  }
  ?>
    <form action="" method="post" >
    <input type="text" name="searchterm">
    <input type="submit" value ="Search">
  </form>
</body>
</html>