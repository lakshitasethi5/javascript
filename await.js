//await ::keyword is used inside the async function and 
//then method gets executed.



//syntax:: let result = await promise;

//await pauses the async function until the promise
//returns a result (resolve or reject) value.

//a promise
console.log("a promise");
let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('promise resolved')},4000);
    
});
//async function 
console.log("async function");
async function asyncFunc(){
    //wait until the promise resolve
    let result = await promise;
    console.log(result);
    console.log('hello');
}
//calling the async function
asyncFunc();


