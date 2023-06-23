// Q 27. Remove Element

// var res = []
// var nums = [3,2,2,3];
// var val = 3

// for(let i=0 ; i<nums.length; i++){
//     if(nums[i] !== val){
//         res.push(nums[i])
//     }
// }
// console.log(res);
  

var res = []
var nums = [0,1,2,2,3,0,4,2]
var val = 2

for(let i=0 ; i<nums.length; i++){
    if(nums[i] !== val){
        res.push(nums[i])
    }
}
console.log(res);