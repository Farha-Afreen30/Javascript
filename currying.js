let multiply = function (x,y) {
  console.log(x*y)
}

let multiplybyTwo = multiply.bind(this,2);
multiplybyTwo(10);

let multiplybyThree = multiply.bind(this,3);
multiplybyThree(10);
