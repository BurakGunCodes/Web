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
        for(loop_var=0; loop_var<=20; loop_var++)
        {
                document.write(loop_var,"<br>");
        }

        function addtwo(a,b){ return a+b;}
               

        console.log(addtwo(5,8));
        
        const mul = (a,b) => { return a*b};
     // const mul = (a,b) => a*b ;
        console.log(mul(4,8));

        const obj = {
                first: 'burak',
                last: 'gün',
                getFullName(){
                        return this.first + " " + this.last ;
                },

        };
        
        function meth(name, age){
                this.name = name;
                this.age = age;


        }

        const example =   obj;
        example.first = "necmi";
        example.last = "haci" ;
        console.log(example.getFullName());
        console.log(obj.getFullName());

        const father = new meth("mustafa",48);
        const mother = new meth("mami",48);


        const arr = [1,2,3,4,5,6];
        for(const element of arr){
                console.log(element);
        }
        

        class Person{
                constructor(name){
                        this.name =name;
                }
                describe(){
                        return 'Person named' + ' ' + this.name;
                }
                static logNames(persons){
                        for(const person of persons){
                                console.log(person.name);
                        }
                }
        }
        //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
        class Employee extends Person{
                constructor(name,title){
                        super(name);
                        this.title=title;
                }
                describe(){
                        return super.describe() + ' ' +this.title;
                }
        }


        const burak = new Employee('burak','eng');
        console.log(burak.describe());

        