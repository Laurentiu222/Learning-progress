<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="functions.php" method="get">
    <input type="text" name="num1" placeholder="Number 1">
    <select name="oper">
      <label>Choose operation!</label>
      <option value="add">Add</option>
      <option value="sub">Subtract</option>
      <option value="multy">Multiplication</option>
      <option value="divide">Divide</option>
    </select>
    <input type="text" name="num2" placeholder="Number 2">
    <button type="submit">Calculate</button>
  </form>
</body>
</html>