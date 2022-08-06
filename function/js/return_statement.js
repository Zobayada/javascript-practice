<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Return Statement</title>
</head>
<body>
    
    <script>

        // Return Statement

        function name(firstName) {
            return 'Hello' + ' ' + firstName;
        }
        var fullname = name("parvez");
        document.write(fullname);

        // Another Example

        function add(x,y){
            return x+y;
        }
        var sum = add(10,5);
        console.log(sum);

        // Another Example

        function data(){
            return{
                name : 'Afnan',
                age : 20,
                member : [1,2,3,4,5],
                occupation : 'student',
                print : function(){
                    console.log(this.name);
                }
            }
        }
        var obj = data();
        console.log(obj);



    </script>
</body>
</html>