//async function::Async simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread.

//Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.

async function f(){
    console.log('async function.');
    return Promise.resolve(1);
}
f();

console.log("this function returns a promise, we can use chaninig method THEN()");
async function f(){
    console.log('Async function');
    return Promise.resolve(1);
}
f().then(function(result){
    console.log(result)
});