
function BMI ( weight,height){

let result = weight / (height * height);
return result;
}

console.log(BMI(60,1.6));

function status(bmi){
    if(bmi < 18.5 ){
        return( "لديك نقص في الوزن");
        resultText.style.color = "orange"
    }else if(bmi >= 18.5 && bmi < 25){
        return( "وزنك صحي" );
        resultText.style.color = "green"

    }else if (bmi >=25) {
        return( "لديك زيادة في الوزن" );
        resultText.style.color = "red"

    } 

}
function calculate(){
    let weight = document.getElementById("weight").value;
     let height = document.getElementById("height").value;

     let bmi = BMI(weight, height)

     let desc = status(bmi);

     let div = document.getElementById("result")

     div.innerText = bmi + " == " + desc
     

}

console.log(BMI);
