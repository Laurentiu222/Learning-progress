<?php 
    $name = "Bro Code";
    $food = "pizza";
    $email = "fake@gmail.com";
//int
    $age = 21;
    $users = 2;
    $quantity= 3;
//float
    $gpa = 3.5;
    $price= 4.99;
    $tax_rate=5.1;
//bollean
    $emplayed = true;
    $online = false;
    $for_sale = true;

    echo "Hello {$name}<br>";
    echo"You like {$food}<br>";
    echo "Your email is {$email}<br>";
    echo "You are {$age} years old<br>";
    echo "There  are {$users} users online<br>";
    echo "You would like to buy {$quantity} items,<br>";
    echo"Youre gpa is {$gpa}<br>";
    echo"Youre pizza is \$ {$price}<br>";
    echo "The sales taxe rate is {$tax_rate}%<br>";
    echo "Online status: {$online}<br>";
    $total = null;

    echo"You have oredered {$quantity} x {$food}s<br>";
    $total = $quantity * $price;
    echo"Your total is: \${$total}<br>";
?>
