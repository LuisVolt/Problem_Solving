
//  Need a prompt that asks for a number   ans stores in "inputNumber" as an integer
let inputNumber = parseInt(prompt("Enter a number"));

// Need  for loop that displays a counter from 1 to the "inputNumber"
for (let i = 1; i <= inputNumber; i++){
    if(i%5 == 0 && i%3 == 0) {console.log('FizzBuzz \r');}
    else if (i%5 == 0) {console.log('Buzz \r');}      
    else if (i%3 == 0) {console.log('Fizz \r');} 
    else{console.log(i);} //last merge
}

