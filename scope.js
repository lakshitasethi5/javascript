console.log("global variable");
var x = 10;
function test(){
    var x = 20;
}
test();
console.log(x);

console.log("combine effect of variable scoping and variable hoisting");
var y = 10;
function test()
{
    if(y>20){
        var y = 50;
    }
    console.log(y);
}
test();

var z = 10;
console.log(z);
function test()
{
    var z = 20;
    console.log(z);
     if (z>10){
        let z = 30;
        console.log(z);
     }
     console.log(z);
}
test()
console.log(z);