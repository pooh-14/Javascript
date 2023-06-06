// var target = 93;
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91, 1, 1];
// for(var i=0; i<array.length; i++){
//     for(var j=i+1; j<array.length; j++){
//         // if(array[i]+array[j]==target){
//         //     console.log(array[i], array[j],"total",target)
//         // }
//         // console.log(array[i], array[j])
//         // console.log(array[i]+ array[j],"total",target)
//         for( var k=j+1; k<array.length; k++){
//             if(array[i]+array[j]+array[k]==target){
//                 console.log(array[i],array[j],array[k], "target achieved")
//             }
//         }
//     }
// }

// ASSIGNMENT DAY 19

var target = 25;
var array = [ 2,3,5,5,32,54,23,12,45,23,43,1,34,65,1,54,6,33,4,9,7 ];
for(i=0; i<array.length-3;i++){
    for(j=i+1; j<array.length-2;j++){
        for(k=j+1;k<array.length-1;k++){
            for(l=k+1;l<array.length;l++){5
                if(array[i]+array[j]+array[k]+array[l]==target){
                    console.log(array[i],array[j],array[k],array[l], "target achieved")
                }
            }
        }
    }
}
