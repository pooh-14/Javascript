//*CONCAT* => used to merge two or more arrays

// let array1 = ['a', 'b', 'c'];
// let array2 = ['d', 'e', 'f'];
// let array3 = array1.concat(array2);

// console.log(array3);


//*FILTER* =>creates a shallow copy

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length < 6);
// console.log(result);


//*FIND* => used to return the first element in the provided array

// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 100);
// console.log(found);


//*FINDINDEX* =>  returns the index

// const array1 = [5, 12, 8, 120, 44];
// const isLargeNumber = (element) => element > 11;
// console.log(array1.findIndex(isLargeNumber));


//*FOREACH* => executes a provided function once for each array element

// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));


//*JOIN* => returns a strings without any seperator

// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());


//*MAP* => creates a new array

// const array1 = [1, 4, 9, 16];
// const map1 = array1.map(x => x * 2);
// console.log(map1);


//*REVERSE* => used to reverse an array

// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// const reversed = array1.reverse();
// console.log('reversed:', reversed);


//*SOME* => returns true or false value based on conditions

// const array = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.some(even));

// const array = [1, 7, 3, 9, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.some(even));


//*SORT* => sorts the array in ascending order

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);


//*SPLICE* => removes or replaces existing array

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months);

// months.splice(4, 1, 'May');
// console.log(months);


//*SLICE* => returns a part of array which falls under start and end index nos. mentioned

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));

// console.log(animals.slice(2, 4));

// console.log(animals.slice(1, 5));


//*EVERY* => returns a boolean value based on the condition

// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 43];
// console.log(array1.every(isBelowThreshold));


//*INCLUDES* => it determines whether a value is included in an array or not by returning a boolean value

// const array1 = [1, 2, 3];
// console.log(array1.includes(2));

// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));


//*FROM* =>creates a new array

// console.log(Array.from('foo'));


const array1 = [1, 2, 3, 4];


const red = array1.reduce((acc, cur)=>{
return(acc+cur)
},23)
console.log(red)


