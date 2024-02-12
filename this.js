console.log("implicit binding");
const person = {
    name:"ram",
    age:22,
    greet:function(){
        return `hello ${this.name},you are ${this.age} years old`
    }
}
console.log(person.greet());
//here this keyword is refering to the person object
//so it can access name and age values.
console.log("explicit binding");
function ageVerify(){
    if(this.age> 18){
        console.log("Yes you can drive");
    } else {
        console.log("No you cannot drive");
    }
}
 
const per1 = {age: 21};
const per2 = {age: 16};
ageVerify.call(per1);
ageVerify.call(per2);

console.log("default binding");
const age = 22;
function verifyAge(){
    return this.age;
}
console.log(verifyAge());

console.log("arrow function binding");
const per= {
    name:"ram",
    age:22,
    greet:() =>{
        return `hello , you are ${this.age} year old`
    }
}
console.log(person.greet());

