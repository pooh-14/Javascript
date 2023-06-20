// function nameoffunction (props){
//     console.log(props)
// }
// nameoffunction( "hii")
// var nameoffunction2 = (props)=> {
//     console.log(props)
// }
// nameoffunction2("hii")

// var myname="awdiz";//assign
// myname="hello";//re-assign
// var myname="pooja";//re-declare 
// console.log(myname)

// let myage=24;//assign
// myage=42;//re-assign
// //let cannot be redeclared
// console.log(myage)

// const mycity = 'Mumbai';
// console.log(mycity)
// //const cannot be re-assigned or re-declared

// function outerfunction(){
//     var mymarks=40;
//     console.log("inside the outer function")
//     function innerfunction(){
//         console.log("inside the inner function",mymarks )
//     }
//     return innerfunction;
// }
// var res= outerfunction();
// console.log(res())

// function external(){
//     var institute="awdiz";
//     console.log("the external function")
//     function internal(){
//         console.log("the internal function ",institute)
//     }
//     return internal;
// }
// var result =external();
// console.log(result())



nums = [1,1,2]
var i= 0;
for(var j=0; j<nums.length;j++){
    if(nums[i]!==nums[j]){
        i++;
        (nums[i]=nums[j]);
    }
}
return i+1;