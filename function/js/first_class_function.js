<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>First Class Function</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
        
        <script>

            // Function stored in Variable
            function sayName(name){
                return "Hello " +  name;
            }
            var hello = sayName;
            var anotherHello = hello;
            console.log(anotherHello("Afnan"));
            document.write(sayName("Zobayada"));
           
            // Function stored in Array
            var arr = [1,2,3,hello];
            arr.push(anotherHello)
            console.log(arr);

            // Function stored as an object
            var person = {
                name: 'Parvez',
                roll: 36,
                sayName: hello,
                print: function(){
                    console.log("rohman");
                }
            }
            console.log(person);

            // Function create as Needed
            var sum= 10 + (function(){return 20})(); // self invoke function 
            console.log(sum); 

            // Function as an arguments
            function fci(teacher, students) {
                return students("Nokib");
            } //students k argument hisebe dhora hoyeche
            var list = fci('Moly', sayName); // sayName hcce ager toiri function, students er
                                            //poriborte ekhane ager toiri function call krte hbe
            console.log(list);
 

            //Return Function from Another Function
            function base(b) {
                return function(n) {
                    var result = 1;
                    for(i=0; i<b; i++){
                        result *= n;
                    }
                    return result;
                }
            }
            var power = base(2);
            var result = power(10);
            console.log(result);


            // Example another Function
            function counter() {
                var count = 0;
                return function () {
                    console.log(count++);
                }
            }
            var count = counter();
            count();
            count();
            count();
        </script>
    </body>
</html>






