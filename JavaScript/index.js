        // comment
        console.log("Hello World");

        let kelime = "JavaScript";
        let kelime2 = "Dersleri"
        console.log(kelime +" "+ kelime2);

        let velocity = 250 ;
        console.log(velocity);

        let var1=10, var2=20, var3=5;
        var1<var3 ? var3=10 : var3 = 25; // true:false
        console.log(var3);

        //alert gibi ekrana pop-up şeklinde çıkar
        //let var4 = prompt("giriş yapınız","rakam giriniz");
        //console.log(var4);

        //sayfanın içerisine veri yazar. 
        //document.write("Girilen değer ", var4, "<br>");
        //html yazım tag'leri kullanılabilir

        document.write("<b>","Merhaba ",45 );
        let varX=45;

        if(varX < 3)
        {
                console.log("Rakam 3 ten küçük");
        }else{
                console.log("Rakam 3ten büyük");
        }

        document.write("<br>");

        let loop_var ;
        for(loop_var=0; loop_var<50; loop_var++)
        {
                document.write(loop_var,"<br>");
        }