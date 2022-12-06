const add = function(...args) {
	let add = 0;
  for (arg of args){
    add += arg;
  }
  return add;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  for (arr of array){
    sum += arr;
  }
  return sum;
};

const multiply = function(a) {
  let array = a;
  let mult = 1
  for (arr of array){
    mult *= arr;
  }
  return mult;
};

const power = function( a , b) {
  let power = a;
  let base = a;
  let exponent = b;
  for (let i = exponent; i > 1; i--){
  power *= base;
  }
  return power;
};

const factorial = function(num) {
  let fact = 1;
  let array = Array.from({length: num}, (v, i) => i +1);
  console.log(array);
  for (a of array){
    fact *= a;
  }
  return fact;
};