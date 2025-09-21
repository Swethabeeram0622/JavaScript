<!DOCTYPE html>
<html lang="en">
<head>
    <title>call back hell...rest operator.</title>
</head>
<body>
    <script>
        /*spread passes through function arguments..
        similar to spread operator and calls to function*/
         function open(...foods){
          console.log(foods)
         } 
         const food1="juice"
         const food2="icecream"
         const food3="coke"
         open(food1,food2,food3)
         
         
        // another program
         function cake(cupcake){
            console.log(cupcake)
         }
        cake("muffins")


          // program
        function women(...womens){
console.log(womens)
}
const women1="dresses"
const women2="moisturising creams"
const women3="ornaments"
const women4="whitening creams"
const women5="hair serums"
women(women1,women2,women3,women4,women5)



       // program
function women(...cosmetics){
    console.log(cosmetics)
}
cosmetic1 = "nailpolish"
cosmetic2 = "moisturizer"
cosmetic3 = "whitening cream"
cosmetic4 = "acne cream"
fun(cosmetic1,cosmetic2,cosmetic3,cosmetic4)


    </script>
</body>
</html>
