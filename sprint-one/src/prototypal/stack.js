

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

var stackMethods = {};
stackMethods.push=function(value){
  this.storage[this.count] = value;
  this.count++;
};
stackMethods.pop = function() {
  this.count--;
  return this.storage[this.count];
};
stackMethods.size = function() {
  if(this.count<0) return 0;
  return this.count;
};

console.log(Stack());
// var someMethods = {};
// someMethods.move = function(){
//   this.position +=1;
// };
// var Car = function(position){
//   var someInstance =Object.create(someMethods);
//   someInstance.position = position;
//   return someInstance;
// };
// var car1 = Car(5);
// console.log(car1.move);
