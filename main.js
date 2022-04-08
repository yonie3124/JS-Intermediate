// 1. Addition

// Add all the values between 200 and 2700 (inclusively) that divide 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.
// first the sum is declared to 0;
// then a for loop is created to the numbers between 200 and 2700, then for every iteration the value is incremented by 1, 
// if statment is inserted to check the values that can divide 3 or 5 and to be added. then 


let sum = 0;
for (let i = 200; i <= 2700; i++) {
    if(i % 3 || i % 5 === 0) {
        sum = sum +i;
        if(i % 3 && i % 5 === 0){

        sum = sum - i

    }
       
    } 
}
console.log(`The sum of numbers between 200 and 2700, divide 3 and 5 but not divide both numbers is: ${sum}`);

 // 2. Shift the Values

 let x =[2,1,6,4,-7];
 reverse = x.reverse(x);

 console.log(reverse);



 // 3. FizzBuzz


for (let i = 1; i <= 135; i++) {
    if (i%3===0 && i%5===0) {
        console.log("FizzBuzz");
    } else if (i%3===0) {
        console.log("Fizz");
    } else if (i%5===0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}




// For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

// 0 1 1 2 3 5 8 13 21...


let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= 10; i++) {
    console.log(n1),     
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// 5. Remove the Negative



var y = [1,-2,4,1]

for(let i=0; i <y.length; i++){
   
    if(y[i]<0){
       y.splice(i, 1);
    }    
}
console.log(`Iteration after removal of negatives`)
console.log(y)




// 6. Communist Censorship



var w = ['Man', 'I','Love','The','Matrix','Program']
w.pop("Program");
w.push("******");

    console.log(w);






 













