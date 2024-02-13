
//callback:: function inside another function is called callback function.
//a callback function can run after another function has finished.

function myFun(b){
    console.log("myFun is run");
    b();
}
myFun(function b(){
    console.log("b is running");
})

console.log("call function inside the function");
function c(){
    console.log("c is run");
    function d(){
        console.log("d is running");
    }
    d();
}
c()

console.log("using set timeout function");
function e(){
    setTimeout(function(){
        console.log("e is running");
    },2000)
}
function f(){
    console.log("f is running");
}
e();
f();

console.log("creating b function parameter of function a");
function g(first){
    setTimeout(function(){
        console.log("g is running");
        first()
    },2000)

}
g(function h(){
    console.log("h is running");
});

