<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Return Function</title>
</head>
<body>

    <script>
        // ------------------------ //
        function host(){
            console.log("I am Host...");
            return function child(){
                console.log("I am Child...");
            }
        }
        var a = host();
        console.log(a());

        // ----------------------- //
        function greetings(msg){
            return function(name){
                console.log(msg + ' ' +name);
            }
        }
        var morning = greetings("Good Morning");
        var night = greetings("Good Night");

        console.log(morning("Parvez"));
        console.log(night("Afnan"));
    </script>
    
</body>
</html>