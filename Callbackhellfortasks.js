<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <script>
        
        function task1(callback){
           setTimeout(()=>{
            console.log("task1 finshed")
            callback()
           },2000)
        }
        function task2(callback){
            setTimeout(()=>{
                console.log("task2 finished")
                callback()
            },2000)
        }
        function task3(callback){
            setTimeout(()=>{
                console.log("task3 finished")
                callback()
            },2000)
        }
       
       task1(()=>{
        task2(()=>{
            task3(()=>alert("all tasks are completed"))
        })
       })
       
    </script>
</body>
</html>
