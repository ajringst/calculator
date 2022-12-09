let screenValues = new Array(3);


const indexCheck = function(){
  if (screenValues[1] == undefined ){
  console.log(screenValues[1]);
  }
};

const nums = document.querySelectorAll(".number");
const concatNum = nums.forEach(element => { element.addEventListener("click", function(){
  value = toString(element.innerText);
})
});

indexCheck(screenValues);

const operate = function([first, operator, second]){
  let a = first * 1;
  let b = second * 1;
  if(operator == add ){
    return a + b;
  };
  if(operator == subtract ){
    return a - b;
  };
  if(operator == multiply ){
    return a * b;
  };
  if(operator == divide ){
    if(b == 0){
      alert("you sneaky bugger!")
    }
    else{
    return a / b;
    }
  };
};