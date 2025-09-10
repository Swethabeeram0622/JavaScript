<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <input type="text" placeholder="enter u r poki name" id="pokiname"/>
    <button onclick="fetchdata()">submit</button>
    <br><br>
    
     <script>
       async function fetchdata() {
        try{
            const pokiname = document.getElementById("pokiname").value
            console.log(pokiname)
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokiname}`)

          if(!response.ok){
            throw new Error("api key is wrong")
          }
          const data = await response.json()
          console.log(data)

        }catch(error){

        }
       }
     </script>
</body>
</html>
