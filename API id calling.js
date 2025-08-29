<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <style>
    body{
    text-align: center;
    }
    input{
    font-size: 20px;
   }
   button{
    background-color: green;
    color: white;
    border: 2px solid white;
    border-radius: 10px;
    font-size: 20px;
   }
   img{
    border: 2px solid green;
    border-radius: 20px;
  }
  table{
    border: 2px solid green;
    width: 200px;
    margin-left: 70px;
    border-radius: 20px;
  }
    </style>
</head>
<body>
   <input type="text" placeholder="enter u r poki name" id="pokiname"/>
   <button onclick="fetchdata()">submit</button>
   <br><br>
    <table><tr><th> img: <img src="" alt="poki image" id="pokiimg"/></th></tr>
      <tr><th>id:  <span id="getid"></span></th></tr>
    </table> 
     <script>

       async function fetchdata() {
        try{
          const pokiname = document.getElementById("pokiname").value
          console.log(pokiname)
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokiname}`)

          if(!response.ok){
            throw new Error("api key is wrong")
          }
          const data = await response.json();
          const pokisprite = data.sprites.front_default;
          const pokiid = data.id
 
         const pokinum = document.getElementById("getid")
         const pokiimg = document.getElementById('pokiimg')
          pokiimg.src = pokisprite
          pokinum.innerHTML = pokiid
        }catch(error){
          console.error
         }
       }
     </script>
</body>
</html>
