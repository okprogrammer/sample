console.log("This is tutorial 46")

let reg = /harry/; // This is regular expression literal in js
reg = /harry/g;//g for global search
//reg = /harry/i; //i mean case insensitive
console.log(reg);
console.log(reg.source);


let s = "This is great code with harry and also harry bhai";
//Function to match expressions
//1. exec() - This function will return an array for match or null for no match

//with g matches for first occurence
let result = reg.exec(s);
//console.log(result);
// with g matches for 2nd occurence
// result = reg.exec(s);
// console.log(result);
//with g finally returns null
// result = reg.exec(s);
// console.log(result);

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

//2. test() --> Returns true or false
let result2 = reg.test(s);
//console.log(result2); -->This will only print true if the "reg" is there i the string 's'

//3. match() --> It will return an array of results or null
//let result3 = reg.match(s) --> This is wrong!
// let result3 = s.match(reg); // --> This is right!
// console.log(result3);

//4. search() --> Returns index of first match else -1
//let result4 = reg.search(s) --> This is wrong
let result4 = s.search(reg);
//console.log(result4);

//5. replace() --> Returns new replace string with all the replacements(if no flag is given then first match will be replace)

let result5 = s.replace(reg, "SHUBHAM");
//console.log(result5);