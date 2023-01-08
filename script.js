let screenValues = new Array(3);

const indexCheck = function(){
  if (screenValues[1] == undefined ){
  console.log(screenValues[1]);
  }
};

const add = function(a,b){
  return a + b;
}

const subtract = function(a,b){
  return a - b;
}

const multiply = function(a,b){
  return a * b;
}

const divide = function(a,b){
  if( b == 0){
    return null;
  }
  else{
    return a / b;
  }
}

const nums = document.querySelectorAll(".number");
const concatNum = nums.forEach(element => { element.addEventListener("click", function(){
  value = toString(element.innerText);
})
});

indexCheck(screenValues);

const operate = function([first, operator, second]){
  let a = first * 1;
  let b = second * 1;
  if(operator == "add"){
    return add(a,b);
  };
  if(operator == "subtract"){
    return subtract(a,b);
  };
  if(operator == "multiply"){
    return multiply(a,b);
  };
  if(operator == "divide"){
    return divide(a,b);
  };
};