<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Example</title>
</head>
<body>
    <!--

    <?php
    $name = "jo" ;
    $age = 06;
    
    echo "<h1> $name $age  yaşındadır.  </h1>";
    echo "<hr>" ;

    $myString = "This is string";
    $myInt = 33;
    $myFloat = 90.5;
    $myBool = TRUE;
    echo "$myString $myInt $myFloat $myBool";
    echo "<br>" ;
    echo strtolower($myString);
    echo "<br>" ;
    echo strtoupper($myString);
    echo "<br>" ;
    echo "length :" ; 
    echo strlen($myString) ;

    ?>

-->

<!--
    <form action="first.php" method="get">
        Name : <input type="text" name="user_name">
        Age : <input type="number" name="user_age">
        <input type="submit">
    </form>

    <?php echo $_GET["user_name"] ?> 
    <br>
    <?php echo $_GET["user_age"] ?> 
-->
    
    <hr>
    

    <form action="first.php" method="POST" >
        Name: <input type="text" name="userName" >
      Password : <input type="password" name="password" >
        <input type="submit">
    </form>

   
     <?php echo $_POST["userName"]  ?>
     <br>
     <?php  echo $_POST["password"]  ?>

     <?php
     $friends = array("burak", "murat", "onur");
     echo $friends[0];

     $friends[5]="haci";
     echo $friends[5];
     echo count($friends);
     ?>

 
</body>
</html>

<!-- 
    video link : https://www.youtube.com/watch?v=OK_JCtrrv-c
    1:50:00
-->