<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .dice {
            width: 100px;
            height: 100px;
            margin: 20px;
            transition: transform 0.3s ease-in-out;
        }
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .container {
            margin-top: 50px;
        }
        input {
            padding: 10px;
            font-size: 16px;
            width: 50px;
            text-align: center;
            margin-bottom: 10px;
        }
        button {
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
        }
        button:hover {
            background-color: #0056b3;
        }
        #resultMessage {
            font-size: 24px;
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎲 Roll the Dice - Guess the Number</h1>

        <label for="guess">Enter Your Guess (1-6):</label>
        <input type="number" id="guess" min="1" max="6">

        <img id="diceImage" src="images/1.png" alt="Dice" class="dice">
        <button onclick="rollDice()">Roll Dice</button>

        <h2 id="resultMessage"></h2> <!-- Message to show win/loss -->
    </div>

    <script>
        function rollDice() {
            let userGuess = document.getElementById("guess").value;
            let diceValue = Math.floor(Math.random() * 6) + 1; // Random number (1-6)
            let diceImage = document.getElementById("diceImage");
            let resultMessage = document.getElementById("resultMessage");

            if (userGuess < 1 || userGuess > 6 || userGuess === "") {
                resultMessage.textContent = "⚠️ Please enter a number between 1 and 6!";
               
                return;
            }

            // Apply a rolling effect
            diceImage.style.transform = "rotate(360deg)";
            
            setTimeout(() => {
                diceImage.src = `images/${diceValue}.png`;
                diceImage.style.transform = "rotate(0deg)"; 

                if (parseInt(userGuess) === diceValue) {
                    resultMessage.textContent = `🎉 You WON! The dice rolled ${diceValue}.`;
                    resultMessage.style.color = "green";
                } else {
                    resultMessage.textContent = `❌ You lost! The dice rolled ${diceValue}.`;
                    resultMessage.style.color = "red";
                }
            }, 300);
        }
    </script>
</body>
</html>
