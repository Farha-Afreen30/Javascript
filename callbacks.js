//example 1
function sum (callback, a, b){
    let result = a+b;
    callback(result);
}

function display(result){
  console.log(result);
}

sum(display,2,2);

//example 2

function hello(callback){
    setTimeout(function () {
        console.log("Hello");
        callback();
    }, 3000);
    
}

function bye() {
    console.log("Bye");
}
hello(bye);
