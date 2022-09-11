
document.write("<h1> String Örnekler </h1>");
var myString = "Burak Kardeş";

document.write(myString +" uzunluk:"+ myString.length + " karakter," + " büyük harfle : " +myString.toUpperCase());
document.write("<hr>");
document.write("3.karakter: "+ myString.charAt(3));
document.write("<hr>");
document.write(myString.lastIndexOf('a') );
document.write("<hr>");
document.write("3-9 arası karakterler: "+ myString.substring(3,9));
document.write("<hr>");
document.write("string deş ile mi bitiyor :"+myString.endsWith("deş"));
document.write("<hr>");
document.write("string içinde kar var mı?:"+myString.includes("kar "));
document.write("<hr>");
document.write("<br>");
/*
document.write("<h1> Math Örnekler </h1>");
document.write("Round 12.7="+Math.round(12.7)+" "+ "Round 3.3="+Math.round(3.3) );
document.write("<hr>")
document.write("Random number generator: "+Math.random().toPrecision(5));
document.write("<hr>");
document.write("PI is: "+Math.PI.toPrecision(5));
document.write("<hr>");
document.write("Sayının tam sayı kısmı:"+Math.trunc(-11.4));
document.write("<hr>");
document.write("Sayının(-11.4) işareti: "+Math.sign(-11.4)+", Sayının(8) işareti: "+Math.sign(8)+", Sayının(0) işareti: "+Math.sign(0));
document.write("<hr>");
document.write("square root of 56 is: " + Math.sqrt(56).toPrecision(4));
document.write("<hr>");
document.write("Sin(30) is: "+Math.sin(30*Math.PI/180).toPrecision(5));
document.write("<hr>");
document.write( "Min value is :"+ Math.min(0.1, 0.5, 0.8, Math.random().toPrecision(5), Math.random().toPrecision(5), Math.random().toPrecision(3) ) );
document.write("<hr>");
document.write("log(87) is : " + Math.log(87).toPrecision(5));
document.write("<hr>");
*/
document.write("<h1> User Input Örnekler </h1>");
var state = null ;
// state = window.prompt("Hey Dude!! How is it going ?");
if(state==null)
document.write("<h3> typed nothing you b*st*rd </h3>");
else
document.write("you typed : " + state);


document.write("<hr>");

//var number1 = window.prompt("type your first value");
//var number2 = window.prompt("type your second valuw");

// ekrandan okudugu değeri string olarak saklar.
// bu yüzden değeri integer/float'a dönüştürmemiz gerek.
//number1 = parseFloat(number1);
//number2 = parseFloat(number2);

//document.write("result is: "+ (number1+number2) );
document.write("<hr>");

document.write("<h1> Array Örnekler </h1>");

var fruits = new Array("Elma", "Armut", "Karpuz");
document.write("Array:"+fruits+ ", length is :"+ fruits.length);
document.write("<hr>");

const newArray = ["Renault", "Porsche", "Audi", "Skoda"];
newArray[2] = "BMW";
document.write(newArray[2]);
document.write("<hr>");

var myString_2 = "Burak# Ok#, Adam# Ol";
myString_2 = myString_2.split("#");
const date1 = new Date;
document.write(date1.+" "+myString_2[3]);


