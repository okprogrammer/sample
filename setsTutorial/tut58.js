console.log('This is tutorial 58');

//Set store the unique values
//const mySet = new Set();

//Use a constructor to initialize the set
const mySet = new Set([1,45,'this',false,{a:4,b:8},'this']);
console.log('The set looks like :',mySet);

//Adding values to this set
// mySet.add('this');
// mySet.add('My name');
// mySet.add('this');
// mySet.add('that2');
// mySet.add('34');
// mySet.add(true);
// mySet.add(false);
// console.log('The set looks like this now:', mySet);
//let mySet2 = new Set([1,45,'this',false,{a:4,b:8},'this']);
//console.log('New set:' ,mySet2);

console.log(mySet.size);//Get the size of set
console.log(mySet.has(346));//check whether set has 346
console.log('Before removal', mySet.has('that2'));
mySet.delete('that2');//remove an element from the set
console.log('After removal', mySet.has('that2'));

//Iterating a set using for-of
// for(let item of mySet){
//     console.log('Item is ',item);
// }

//Iterating set using foreach
mySet.forEach((item)=>{
    console.log('Item is:',item);
})

//Quiz: can you use Array.from(mySet) to convert set into array?

//converting set into array
const pureArray = Array.from(mySet);
console.log('This converted array from set',pureArray);

//converting array into set
const array = [1,2,3,3,4,5,1,2,0,7,8,7];
const mySet = new Set(array);

