<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <style>
        img{
            height: 200px;
        }
        h1{
            color: palevioletred;
        }
        button{
            background-color: white;
            border-radius: 10px;
            border:  2px solid palevioletred;
            color: palevioletred;
            padding: 10px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <center>
    <div>
    <h1>Flip Coin</h1>
    <img src="flipit/coin1.jpg" id="coinimg" alt="coin"><br><br>
    <button onclick="flipcoin()"><b>FLIP IT</b></button>
        </div>
       <script>
          function flipcoin(){
            let coin = Math.floor(Math.random()*2) +1;
           let flipimg = document.getElementById("coinimg");
           coinimg.style.transform = "rotate(360deg)"
          
           setTimeout(() => {
               coinimg.src = `flipit/coin${coin}.jpg`
               coinimg.style.transform = "rotate(0deg)"
           },30)
        }

        let coin="tail"
        let result=coin = "head" ? "HEAD" : "TAIL";
        console.log(result)
        </script>
    </center>
</body>
</html>
