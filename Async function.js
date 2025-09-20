<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <script>
       function walktoschool(){
        return new promise((resolve, reject)=>{
        const school = true;
        if(school){
            resolve("went to school")
        } else{
            reject("bunk....")
        }
    })
}

function walktoshop(){
        return new promise((resolve, reject)=>{
        const shop = false;
        if(shop){
            resolve("purchasing item")
        } else{
            reject("....thinking to purchase")
        }
    })
}

function walktohome(){
        return new promise((resolve, reject)=>{
        const home = true;
        if(home){
            resolve("reched home")
        } else{
            reject("....on the way")
        }
    })
}

async function all() {
    try{
        const walktoschool1 = walktoschool();
        console.log(walktoschool1)

        const walktoshop1 = walktoshop();
        console.log(walktoshop1)

        const walktohome1 = walktohome();
        console.log(walktohome1)

    }catch(error){
       console.error(error)

    }
}
       all()
    </script>

</body>
</html>
