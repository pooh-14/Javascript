// var target=93;
// var array=[3,54,65,32,6,23,56,76,17];
// for( var i=0; i<array.length;i++){
//     for( var j=i+1; j<array.length; j++){
//         if(array[i]+array[j]==target){
//             console.log(array[i],array[j],"target achieved")
//         }
//         console.log(array[i],"+",array[j],"=",array[i]+array[j])
//     }
// }


// ASSIGNMENT DAY 18

// var target = 93;
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7];
// for(i=0; i<array.length; i++){
//     for(j=1; j<array.length; j++){
//         if(array[i]-array[j]==target){
//             console.log(array[i], array[j], "target achieved")
//         }
//     }
// }

var target = 93;
var array = [3, 65, 32, 6, 23, 56, 76, 17, 100, 7, 90,2,1];
for(i=0; i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        for(k=j+1;k<array.length;k++){
            if(array[i]+array[j]+array[k]==target){
                console.log(array[i],array[j],array[k],"target achieved")
            }
        }
    }
}







