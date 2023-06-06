// var num1= 2345;
// var num2=6789;
// function addition(){
//     var add= num1+num2;
//     console.log(add)
// }
// addition()

// function subtraction(){
//     var sub=num1-num2;
//     console.log(sub)
// }
// subtraction()

// function subtraction(){
//     var sub= num1-num2;
//     if(sub>0){
//         return sub;
//     }else if(sub==0){
//         return "sub is greator than 0"
//     }
//     return "Sub is less than zero"
// }
// var result= subtraction()
// console.log(result)

var target=105;
var array=[23,345,565,65,40,40]

// function additionofnum(samiksha,somesh){
//     for( var i=0; i<samiksha.length-1; i++){
//         for(var j=i+1; j<samiksha.length; j++){
//             if(samiksha[i]+samiksha[j]==somesh){
//                 console.log(samiksha[i],samiksha[j])
//             }
//         }
//     }
// }
// additionofnum(array,target);

// var num1= 234;
// var num2= 456;

// function addition(num1,num2){
//     console.log(num1+num2)
// }
// addition(num1,num2)



// var number1 = 9876;
// var number2 = 5678;
// function subtraction(){
//     var sub=number1-number2;
//     console.log(sub)
// }
// subtraction()

// var number1 = 9876;
// var number2 = 5678;
// function multiplication(){
//     var mul=number1*number2;
//     console.log(mul)
// }
// multiplication()

// var number1 = 9876;
// var number2 = 5678;
// function division(){
//     var div=number1/number2;
//     console.log(div)
// }
// division()

var array = [34,45,56,67,78,34,76,234,567,7834,56,34];
var target = 112;
var flag= false
function additionOfThreeNumber(pooja,levi){
    for( var i=0; i<pooja.length-2; i++){
        for(var j=i+1; j<pooja.length-1; j++){
            for(var k=j+1; k<pooja.length; k++){
                if(pooja[i]+pooja[j]+pooja[k]==levi){
                    console.log(pooja[i],pooja[j],pooja[k])
                    flag=true;
                }
               
                }
            }
        }
        if(flag==false){
            console.log("No 3 numbers add upto the target")
        }
            
    }

additionOfThreeNumber(array,target)
