console.log('This is tutorial 49');

//Character classes
let regex = /\war/;     //word character - _ or alphabet or numbers
regex = /\w+d1r/;       //\w+ means one or more word characters
regex = /\Wbhai/        //Non Word Character
regex = /\W+bhai/;      //W+ means more than one Non word character
regex = /number \d999/; // \d means digit
regex = /number \d+/;   //\d+ means more than one digit
regex = /\D999/;        // \D means non digit
regex = /\D+999/;       // \D+ means more than one non digit
regex = /\ska number/; // match whitespace character
regex = /\s+ka number/; // s+ means matches more than one whitespace character
regex = /\Ska number/; // match non whitespace character
regex = /\S+ka number/; // matches more than one or more non whitespace character
regex = /4r5r\b/; //word boundary

//Assertions
regex = /h(?=y)/;
regex = /h(?!y)/;

str = "harh7rd1r4r5r %%$@bhaiharryka number 9999harry999999";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
