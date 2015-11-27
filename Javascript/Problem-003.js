/*
Largest prime factor
Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

var number=600851475143;
var maxsize=Math.floor(Math.sqrt(number));
console.log("Start from: ", maxsize);
var prime=1, answer=0;

var isPrime = function (number) {
    for (var i = 2; i<number; i++){
        if(number%i==0){
            console.log(i, "is not prime number");
            return 0;
        }
    }
        console.log("prime");
        console.log(i);
        return number;
};

for (var i = maxsize; i > 0; i--) {
    if(number%i==0){
        console.log("Number", i, "is divisible with", number);
        answer=isPrime(i);
        if(answer!==0){break;}
    }
}
    console.log("vastaus");
    console.log(answer);

console.log("Answer is:");
console.log(answer);

/*Answer is 6857*/