<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
<style>
    body{
        background-image: url(./time.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
        font-size: 70px;
    }
    h2{
        margin-left: 25%;
        margin-top: 16%;
    }
</style>
</head>
<body >
    <h2 id="dat"></h2>
    <script>
        function up(){
        const d = new Date()
        const hours = d.getHours()
        const min = d.getMinutes()
        const seconds = d.getSeconds()
      document.getElementById("dat").textContent= `${hours} : ${min} : ${seconds}`
        }
      setInterval(up,1000)
    </script>
</body>
</html>
