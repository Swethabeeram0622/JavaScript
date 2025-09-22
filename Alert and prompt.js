<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <style>
        button{
            margin-left: 700px;
            margin-top: 20px;
            padding: 10px 20px;
            border: 2px outset grey;
            background-color: green;
            color: white;
            border-radius: 20px;
        }
        div{
            margin-left: 700px;
            margin-top: 280px;
        }
    </style>
</head>
<body>
    <div id="div1">hi guys</div>
    <button onclick="swetha()">click</button>
    <script>  
      function swetha(){
       alert(`hi swetha`)
       const minNum = 1
       const maxNum = 10
       const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
       const guess = parseInt(prompt(`guess the number between ${minNum} to ${maxNum}`))
       if(guess === answer){
       alert("you won")
       var element = document.getElementById("div1")
       element.innerHTML = "hi bro"
       }
       else if(guess > answer){
       alert(`you are near ${answer}`)
       } 
       else if(guess < answer){
       alert(`you missed the answer ${answer}`)
      }
      else{
      alert("enter a input....")
      }
      }

    </script>
</body>
</html>
