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
