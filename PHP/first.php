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
    
<!--
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
    echo " length: " ;
    echo count($friends);
     ?>
-->
    <!--
    Checkbox
    -->
    <form action="first.php" method="POST">
    Elma: <input type="checkbox" name="secenekler[]" value="elma"><br>
    Armut: <input type="checkbox" name="secenekler[]" value="armut"><br>
    Muz: <input type="checkbox" name="secenekler[]" value="muz"><br>
    <input type="submit">
    </form>

    <?php
    $meyveler = $_POST["secenekler"];
    if( $meyveler != NULL){
        foreach($meyveler as $x){
            echo $x . " - ";
        }
    }

    ?>
    <!--
    Associative Array
    -->
    <?php  
    echo "<hr><br>";
    $grades = array("Burak"=>"B+", "Murat"=>"A+", "Onur"=>"A+");
    $grades["Burak"]  = "C+";
    echo $grades["Burak"] . " ";

    //İlişkisel bir bağlantı yaptım. num-isim, isim-sehir. 
    // sonuc olarak numara ile sehir bilgisine ulaşılabilir.
    $number = array("264470"=>"burakgun","264471"=>"muratgun", "264472"=>"onurgun");
    // coklu ayni deger girişlerinde son girilen işleme alınır. yani burakgun-ankara
    $Addr = array("burakgun"=>"sakarya", "burakgun"=>"sivas", "burakgun"=>"ankara", "muratgun"=>"istanbul", "onurgun"=>"samsun");

    echo $Addr[ $number["264470"] ] . " ";

    ?>

<!--
    Functions
-->
    <?php
        echo "<hr><br>";

        function sayHi($name){
            echo "Merhaba $name Kardeş <br>";
        }

        sayHi("Burak");

    ?>


<!--
    Form
-->
        <form action="first.php" method="POST">
            N1: <input id="number1" type="number" name="N1"><br><br>
            N2: <input id="number2" type="number" name="N2"><br><br>
            OP: <input type="text" name="Op"><br><br>
            Out : <div id="result" style="display: inline-block; 
                            width: 150px; 
                            height: 20px; 
                            background: lightslategray;"><br><br>

            </div>
            <input  style="background: lightpink;" 
                    type="submit" 
                    name="submitButton"><br><br>

        </form>


        <?php
            $Num1 = $_POST["N1"]; 
            $Num2 = $_POST["N2"]; 
            $Op = $_POST["Op"];           
        ?>

    <?php
        echo $_SERVER['PHP_SELF'];
        echo "<br>";
        echo $_SERVER['SERVER_NAME'];
        echo "<br>";
        echo $_SERVER['HTTP_HOST'];
        echo "<br>";
        echo $_SERVER['HTTP_REFERER'];
        echo "<br>";
        echo $_SERVER['HTTP_USER_AGENT'];
        echo "<br>";
        echo $_SERVER['SCRIPT_NAME'];
    ?>

</body>
</html>

<!-- 
    video link : https://www.youtube.com/watch?v=OK_JCtrrv-c&t=h1m47s0
    3:30:00
-->