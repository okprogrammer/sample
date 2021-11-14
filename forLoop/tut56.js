console.log("This is tutorial 56 on for-in and for-of loops");


//Traditional for loop:
// for(let index = 0;index<people.length;index++){
//     const element = people[index];
//     console.log(element);
// }

obj = {
    name:"Harry",
    language:"JavaScript",
    hobbies:"Android app development"
}

// console.log(obj);
// 1.1 Iterationg an object using Traditional for loop:
// for(let index=0;index<Object.keys(obj).length;index++){
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element)
// }

//1.2 Iterating an object using for-in loop:
for(let key in obj){
    console.log(obj[key]);
}

//1.3 Iterating a string
//We can use for in with strings to loop through all the characters
mystring = "This is my string";

for(let char in mystring){
    console.log(mystring[char]);
}
//Quiz: Use traditional for loop to iterate through the same string

//******** For of loop */
people = ["Harry","Rohan", "SkillF", "Shubham", "Vikrant"];
for(let name of people){
    console.log(name);
}

for(let name of mystring){
    console.log(name);
}