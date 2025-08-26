<html >
<head>
<title>call back hell</title>
</head>
<body>
    <script>
      
     function walktoschool(callback){
        setTimeout(()=>{
          console.log("left the school")
          callback()
        }, 1500)
     }

     function walktoshop(callback){
       setTimeout(()=>{
        console.log("reached to shop")
        callback()
       }, 1500)
     }

     function walktohome(callback){
       setTimeout(()=>{
        console.log("reached to home")
        callback()
       }, 1500)
     }

     walktoschool(()=>{
        walktoshop(()=>{
            walktohome(()=>alert("all tasks are completed"))
        })
     })
     
    </script>
</body>
</html>
