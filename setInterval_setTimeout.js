function print() {
  let number = 2; 
  
  // Using setInterval to print multiples of 2 every 1 second
  const display = setInterval(() => {
    if (number > 10) {
      console.log("Stopping the interval.");
      clearInterval(display);
    } else {
      console.log(number);
      number += 2;
    }
  }, 1000);

  // Using setTimeout to demonstrate a delayed message
  setTimeout(() => {
    console.log("This message is displayed after 3 seconds using setTimeout.");
  }, 3000);
}

print();
