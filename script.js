// Opdracht 020: Functions: three ways to write them

console.log('Hallo Winc Academy studenten');

// function declaration
function squaredNumbers1(number1, number2){
    const sum1 = (((number1 * number1) + (number2 * number2)) **2);
    return sum1;
}
const result1 = squaredNumbers1(5, 10);
console.log(result1);


// function expression
const squaredNumbers2 = function(number1, number2){
    const sum2 = (((number1 * number1) + (number2 * number2)) **2);
    return sum2;
};
const result2 = squaredNumbers2(5, 10);
console.log(result2);


// arrow function
const squaredNumbers3 = (number1, number2) => {
    const sum3 = (((number1 * number1) + (number2 * number2)) **2);
    return sum3;
};
const result3 = squaredNumbers3(5, 10);
console.log(result3);


