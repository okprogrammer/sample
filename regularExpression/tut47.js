console.log("This is tutorial 47");

let regex = /harry/;
//Lets look into some metacharacter symbols
regex = /^harr/;// ^ means expression will match if string starts with harr
regex = /ry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; //matches any one character
regex = /h*rry/; //matches zero or mote characters
regex = /ha?rryi?/;// ? after the character means that character is optional
regex = /h\*rry/; //for matching * we will use \

let str = "harry means codewith";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex}`);
}else{
    console.log(`The string ${str} does not match the expression ${regex}`);
}
