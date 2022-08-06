<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foreach Function</title>
</head>
<body>
    
    <script>

        // --------------------------------//
        var array=[2,1,8,5,9,6,4];
        array.forEach(function(element, index, array){
            console.log("Element is: " + element + " Index is: " + index + " Array is: " + array);
        });

        // ------------------------------- //
        var arr = [12,98,67,45,34,76,98,32,65];
        function loop(arr){
            for( var i = 0; i<arr.length; i++){
                console.log("Array is: " + arr[i]);
            }
        }
        loop(arr);

        // ------------------------------ //
        var aray = [1,6,4,3,7,9,3,5,2];
        function lop(aray, callback){
            for( var i = 0; i<arr.length; i++){
                callback(aray[i], i);
            }
        }
        lop(aray, function(element, i){
            console.log("Element is = " + element + " Index = " +i);
        });
    </script>
</body>
</html>