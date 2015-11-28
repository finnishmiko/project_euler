/*
Largest prime factor
Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/
var number=600851475143;
//var number=600851475;
var divNumber=number;
var maxsize=Math.floor(Math.sqrt(number));
//console.log("Start from: ", maxsize);
var answer=0;
var divisor=[];
var index=0;

//function to test if testNumber is prime number
var isPrime = function (testNumber) {
    for (var j = 2; j<testNumber; j++){
      if(testNumber%j==0){return 0;}
    }
      return testNumber;
};

// Find divisors that are below number's square root
for (var i = maxsize; i > 1; i--) {
    while(divNumber%i==0){    
        //console.log("Number", i, "is divisible with", divNumber); 
        answer=isPrime(i);
        if(answer!==0){
          //console.log(answer, "is prime");
          divisor[index]=answer; 
          index++;
          divNumber=divNumber/answer;
        }
        else{
          //console.log(i, "is not prime number"); 
          break;
        }
    }
}
    console.log("Divisors");
    console.log(divisor);

// Check largest divisor as it can be larger than SQRT(number)
for(var k=0; k<divisor.length; k++){
    number=number/divisor[k];
    console.log(number);
}
if (number===1){answer=divisor[0];}
else {answer=number}
console.log("Answer is:");
console.log(answer);
/*Answer is 6857*/