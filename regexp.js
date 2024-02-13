//regular expression (RegExp) is an object that descibes a
// sequence of character used for defining a search pattern.

//1. using a regular expression literals.
//const regularExp = /abc/;

//using the regexp() constructor function
//const regularExp = new RegExp('abc);

console.log("regular expression madifier");
const string = 'hello hello hello';
//performing a replacement 
console.log("performing a replacement");
const result1 = string.replace(/hello/,'world');
console.log(result1);
//performing global replacement
console.log("performing global replacement");
const result2 = string.replace(/hello/g,'world');
console.log(result2);
//performing case-insensitive replacement
console.log("performing case insensitive replacement");
const result3 = string.replace(/hello/i,'world');
console.log(result3);
//performing global case - insenitive replacement
console.log("performing global case - insenitive replacement");
const result4 = string.replace(/hello/gi,'world');
console.log(result4);

//regexp prototype test()[this method is used to test whether a match has been found or not.
//it returns true ar false depending upon if the match is found or not.]
console.log("regexp prototype test");
var regex =/hello/;
var str ='hello world';
var result = regex.test(str);
console.log(result);

//regexp.prototype.exec()
//this method returns an araay containing all the matched groups.it accepts a string 
//that we have to test against a regular expression.

var regex =/hello/;
var str ='hello world';
var result = regex.exec(str);
console.log(result);






