<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Callback Function</title>
</head>
<body>
    
    <script>
        // callback function
        function display(number){
            console.log(number);
        }
        function first(){
            display('hello');
        }
        first();

        //sequence control
        function displayer(some){
            console.log(some);
        }
        function add(num1, num2){
            var sum = num1 + num2;
            return sum;
        }
        var result = add(10, 15);
        console.log(result);


        // --------------------------------- //
        function hello(name){
            print(name);
        }
        function print(args){
            console.log(args);
        }
        hello("Twinkle Star");

        // -------------------------------- //
        function fci(student_name, teacher_name){
            teacher_name(student_name);
        }
        fci("afnan", function teacher_name(teacher){
            console.log("Hello " + teacher);
        });
        fci("Parnan", function teacher_name(teacher){
            alert("Name of Length: " + teacher.length);
        });

        // ------------------------------- //
        var me = {
            name : "Parvez",
            age: 12,
            email: "azobayada@gmail.com"
        }

        function mySelf(person, calback){
            console.log(person.name);
            if(person.age >= 18){
                calback(person.email);
            }
            else{
                console.log("You're a Baby");
            }
        }

        mySelf(me, function(email){
            console.log("Email Sent To " + email);
        });

        // ------------------------------- //

        var Stu = {
            name: "bristy",
            roll : 170944,
            semester : "5th",
            subject : "Digital Electronics"
        }
        function herSelf(she, anotherCall){
            console.log("Name is: " +she.name);
            if (she.semester >= "3rd") {
                anotherCall(she.subject);
            } else {
                console.log("Not Found");
            }
        }
        herSelf(Stu, function(subject){
            console.log("Subject is: " + subject);
        });

        // callback
        function sum(number1, number2, calculate){
            var addition = number1 + number2;
            calculate(addition);
        }
        sum(10, 20, function(addition){
            console.log("Summation is: " + addition);
        });
        

        
    </script>
</body>
</html>