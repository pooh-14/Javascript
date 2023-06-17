// Q. find numbers who odd from given array and return array with those number
// var givenArray = [23,45,56,67,23,56,68,34,4556,78,655,23,568787,89845,343,54576,7873,323,54,636,6836,575];

// function oddnum(givenArray){
// var result = [];
// var res= [];
// for( var i=0; i<=givenArray.length; i++){
//     if(givenArray[i] % 2 == 1 ){
//         // console.log(givenArray[i])
//         result.push(givenArray[i])
//     }
// }

// for( var j=0; j<=givenArray.length; j++){
//     if(givenArray[j] % 2 == 0 ){
//         // console.log(givenArray[i])
//         res.push(givenArray[j])
//     }
// }

// console.log(result)
// console.log(res)
// }

// oddnum(givenArray)

// Q. Find the numbers who divisible by 5 from given range and return the array of those number...

// var start = 9876;
// var end = 10234;

// function diviBy5(start, end){

// }

// let start = 872;
// let end = 656;
// function twostage(start, end) {
//   let filteredArray = [];
//   let result = [];
//   for (let i = start; i >= end; i--) {
//     if ([i] % 2 == 0 && [i] % 5 == 0 && [i] % 10 == 0) {
      
//           filteredArray.push([i]);
//     }
//   }
//   console.log(filteredArray);
//   for(let j=0; j<filteredArray.length;j=j+2){
//     // console.log(filteredArray[j])
//     result.push(filteredArray[j])
//   }
//   console.log(result)
// }
// twostage(start, end);

let start = 656;
let end = 872;
function twostage(start, end) {
  let filteredArray = [];
  let result = [];
  for (let i = start; i <= end; i++) {
    if ([i] % 2 == 0 && [i] % 5 == 0 && [i] % 10 == 0) {
      
          filteredArray.push([i]);
    }
  }
  console.log(filteredArray);
  for(let j=0; j<filteredArray.length;j=j+2){
    // console.log(filteredArray[j])
    result.push(filteredArray[j])
  }
  console.log(result)
}
twostage(start, end);




// dom/bom manupulation  
// string methods
// w3school