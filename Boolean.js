<!DOCTYPE html>
<html lang="en">
<head>
    <title>boolean</title>
</head>
<body>
    <script>
        let login= false
        let username
        let password

        while(!login){
         username = prompt("enter u r username")
         password = prompt("enter u r password")

         if ( username === "swetha" && password === "hello"){
             login= true;
        alert("login done")
        }else{
            console.log("xxx")
        }
    }
    </script>
</body>
</html>
