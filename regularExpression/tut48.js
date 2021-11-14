console.log("This is tutorial 48");

//Regular Expression:
//Basic Functions
//MetaCharacters symbols
//Character sets

//const regex = /^h/i;
//Character Sets

let regex = /h[a-z]rry/;//can be any character from a to z
regex = /h[ryu]rry/;//can be an r,y or u
regex = /h[^ryu]rry/; //--> can't r, y and u
regex = /h[^aty]rry/; //can't be an a, t, or y
regex = /h[^aty]rr[yu]/;// cannot be any of a,t or y+can be a, u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/;// we can have as many character sets as we want

//Quantifiers - we use {}
regex = /har{2}y/;//r can occur exacly 2 times
regex = /har{0,2}y/;//r can occur exacly 0 to 2(0 or 1 or 2) times

//Groups - we use paranethesis for groupings()
regex = /(har){2}([0-9]r){3}/;

//const str = "hirry9 Bhai";
//str = "harry bhai";
str = "harhar1r4r5r bhai";
let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex}`);
}else{
    console.log(`The string ${str} does not match the expression ${regex}`);
}
