//example 1
const string = {
  concatenate: function (str1, str2) {
    console.log(this.prefix + " " + str1 + " " + " " + str2);
  },
};

const context1 = { prefix: "Result 1:" };
const context2 = { prefix: "Result 2:" };

// call()
string.concatenate.call(context1, "Hello", "World");

// apply()
string.concatenate.apply(context2, ["Good", "Evening"]);

// bind()
const context3 = string.concatenate.bind({ prefix: "Result 3:" }, "Welcome", "Back" );
context3();


//example 2
const cal_area = function (length, breadth) {
    console.log("The area of the rectangle is: " + length * breadth);
};

const rectangle1 = { name: "Rectangle 1" };
const rectangle2 = { name: "Rectangle 2" };

// call()
cal_area.call(rectangle1, 5, 10); 

// apply() 
cal_area.apply(rectangle2, [7, 8]);

// bind()
const rectangle3 = cal_area.bind(rectangle1, 6, 9);
rectangle3();
