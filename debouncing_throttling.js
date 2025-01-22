//Debouncing
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer); // Clear the previous timer
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function logMessage(message) {
  console.log("Debounced: " + message);
}

const debouncedFunction = debounce(logMessage, 300);

debouncedFunction("Call 1");
debouncedFunction("Call 2");
debouncedFunction("Call 3");
debouncedFunction("Call 4");
debouncedFunction("Call 5");
debouncedFunction("Call 6");
debouncedFunction("Call 7");
setTimeout(() => debouncedFunction("Call 8"), 1000);
//output: 
//Debounced: Call 7
//Debounced: Call 8

//Throttling

function throttle(func, interval) {
  let lastExecutionTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastExecutionTime >= interval) {
      lastExecutionTime = now;
      func(...args); 
    }
  };
}

function logMessage(message) {
  console.log("Throttled: " + message);
}

const throttledFunction = throttle(logMessage, 1000);

throttledFunction("Call 1"); 
throttledFunction("Call 2"); 
setTimeout(() => throttledFunction("Call 3"), 500); 
setTimeout(() => throttledFunction("Call 4"), 1500);

//output:
//Throttled: Call 1
//Throttled: Call 4
