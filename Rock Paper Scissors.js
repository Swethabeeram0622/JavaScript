<!DOCTYPE html>
<html lang="en">
<head>
    <title>Rock Paper Scissors</title>
    <style>
        body{
            background-color: #FAFAD2;
        }
        
        button{
            font-size: 50px;
            background-color: white;
            border-color: crimson;
            border-radius: 15px;
        }
        h1{
            color: crimson;
            font-size: 60px;
        }
        p{
            color: crimson;
            font-size: 30px;
        }
        #result {
      font-size: 40px;
      font-weight: bold;
      margin-top: 40px;
      color: crimson;
     } 
    </style>
</head>
<body><center>
    <h1>Rock Paper Scissors</h1>
    <p>Choose your option</p>
    <button onclick="play('rock')">✊</button>
    <button onclick="play('paper')">✋</button>
    <button onclick="play('scissors')">✌️</button>

    <h2 id="result"></h2>
    </center>
    <script>
        function play(userChoice) {
            const choices = ['rock', 'paper', 'scissors'];
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            console.log(computerChoice)

            let result = '';
            if (userChoice === computerChoice) {
                result = "It's a tie!";
            } else if (
                (userChoice === 'rock' && computerChoice === 'scissors') ||
                (userChoice === 'paper' && computerChoice === 'rock') ||
                (userChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = `You win! ${userChoice} beats ${computerChoice}`;
            } else {
                result = `You lose! ${computerChoice} beats ${userChoice}`;
            }

            document.getElementById('result').textContent = result;
        }
    </script>
</body>
</html>
