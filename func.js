function findSquare(num){
    return num*num;
}
console.log(findSquare(5));
console.log(findSquare(78));
console.log(findSquare(12));

//convert celsius to fahrenheit

function calFarenheit(cel){
    return(cel*9/5)+32;
}
console.log(calFarenheit(0));
console.log(calFarenheit(30));
console.log(calFarenheit(79));

//revrse number using function
function reverseNum(num){
    var reverse = 0;
    while(num!=0)
    {
        reverse = reverse*10;
        reverse = reverse + num%10;
        num = Math.trunc(num/10);
    }
    return reverse;
}
console.log(reverseNum(123123));
console.log(reverseNum(7892345));

//count number of vowels in string

function countVowel(str){
    var count = 0;
    str = str.toLowerCase();
    for(var i=0;i<str.length;i++){
    if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="0"||str.charAt(i)=="u"){
        count++;
    }
}

return count;
}
console.log(countVowel("helllooo"));
console.log(countVowel("good morning guyz"));

//to check string is palindrome
console.log("check given string is palindrome");
function checkPalindrome(str){
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)!=str.charAt(str.length-i-1)){
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome("bannana"));
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("palindrome"));

//find factorial of a number
console.log("find factorial of a number");

function getFactorial(num){
    if(num==1){
        return 1;
    }
    if(num==0||num<0){
        return 0;
    }
    return num*getFactorial(num-1);
}
console.log(getFactorial(8));
console.log(getFactorial(17));

console.log("to check number is prime");

function checkPrime(num,div=2){
    if(num<=2){
        return(num==2)? true:false;
    }
    if(div*div>num){
        return true;
    }
    if(num%div==0){
        return false;
    }
    return checkPrime(num,div+1);
}
console.log(checkPrime(27));
console.log(checkPrime(29));

