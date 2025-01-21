function dogs(name) {
  this.name = name;
}

dogs.prototype.speak = function () {
  console.log(`${this.name} barks.`);
};

const mydog = new dogs("simba");
mydog.speak();
