/*
ProjectEuler.net
Multiples of 3 and 5
Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var summa=0;
var a=1000;
for (var i = 1; i < a; i++) {
    if(i%3==0){
        /*console.log(i);*/
        summa=summa+i;
    }
    else{
        if(i%5==0){
            /*console.log(i);*/
            summa=summa+i;
        }
    }
}
console.log("Answer is:");
console.log(summa);

/*answer: 233168*/