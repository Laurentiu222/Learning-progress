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
  phpinfo();
  #Checking the connection to database
  $db = new mysqli('localhost', 'user', 'password', 'php');
  if($db ->connect_error){
    echo "Conection faeild";
  }else{
    echo "Connection succssesfully";
  }
  ?>
</body>
</html>