<?php
/*
  cookie = Information about user stored in a user's web-browser
            targeted advertisment, browsing preferences, and
            other non-sensitive data
*/
    setcookie("fav_food", "pizza", time() + (86400 * 2), "/");
    setcookie("fav_drink", "Coca-Cola" , time() + (86400*3), "/");
    setcookie("fav_desert", "IceCream" , time() + (86400*4), "/");
    // foreach($_COOKIE as $key => $value){
    //   echo"{$key} = {$value} <br>";
    // }
    if(isset($_COOKIE["fav_food"])){
      echo"Buy some {$_COOKIE["fav_food"]} !!!";
    }else{
      echo"I dont know your fav food";
    }
?>