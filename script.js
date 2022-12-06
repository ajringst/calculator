let screenValues = new Array(3);

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