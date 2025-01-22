//using bind

let multiply = function (x,y) {
  console.log(x*y)
}

let multiplybyTwo = multiply.bind(this,2);
multiplybyTwo(10);

let multiplybyThree = multiply.bind(this,3);
multiplybyThree(10);


//using closures
let multiply_closure = function (x) {
  return function(y) {
    console.log(x*y);
  }
}

let multiplyByTwo = multiply(2);
multiplybyTwo(10);

let multiplyByThree = multiply(3);
multiplybyThree(10);
