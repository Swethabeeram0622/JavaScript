<!DOCTYPE html>
<html lang="en">
<head>
    <title>Temperature Converter</title>
    <style>
        h2{
            font-size: 50px;
            color: peru;
        }
        label{
            font-size: 30px;
            color: peru;
            
        }
        input{
            font-size: 20px;
        }
        button{
            font-size: 22px;
            background-color: peru;
            border: 3px solid white;
            color: white;
            padding: 15px;
            border-radius: 20px;
            margin-top: 20px;
        }
        body{
            background-color: palegoldenrod;
        }
        input[type="radio"] {
    transform: scale(1.5);
  }
    </style>
</head>
<body>
    <center>
        <h2>Temperature Converter</h2>
        <input type="number" id="textbox" /><br><br>
        <label><input type="radio" id="tofh" name="unit"/> C ➡️ F</label><br>
        <br>
        <label><input type="radio" id="tocs" name="unit"/> F ➡️ C</label><br><br>
        <button onclick="convert()">Convert</button>
        <i><h2 id="result"></h2></i>  
    </center>
<script>
    function convert(){
        const textbox=document.getElementById("textbox");
        const tofh=document.getElementById("tofh");
        const tocs=document.getElementById("tocs");
        const result=document.getElementById("result");
        const tempinput= Number(textbox.value)
    let temp;
    if(tofh.checked){
        temp = (tempinput * 9/5) + 32;
        result.textContent = temp.toFixed(1) + "F"
    }
    else if (tocs.checked){
        temp =(tempinput-32)*5/9
        result.textContent = temp.toFixed(1) + "C"
    }
    else{
        alert("enter u r number") 
    }
     }
</script>
</body>
</html>
