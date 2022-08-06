<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sort</title>
</head>
<body>

    <script>

        // ------------------------------------- //
        var list = [20, 12, 70, 74, 36, 80, 6,31, 5];
        list.sort(function(a,b){
            return a-b;
        });
        console.log(list);

        // ------------------------------- //
        var num = [34,87,61,23,98,54];
        num.sort(function(a,b){
            return b-a;
        });
        console.log(num);

        // ------------------------------- //
        var people = [
            {name: "Anika", age:21},
            {name: "Rafi", age:12},
            {name: "Afnan", age:20},
            {name: "Zakir", age:19},
            {name: "Parvez", age:23}
        ];
        people.sort(function(a,b){
            // return a.age - b.age;
            if(a.name > b.name){
                return 1;
            } else if (a.name < b.name){
                return -1;
            } else {
                return 0;
            }
        });
        console.log(people);
    </script>
    
</body>
</html>