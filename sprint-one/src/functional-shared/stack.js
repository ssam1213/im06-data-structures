// var _ = require('../../lib/underscore/underscore.js');



var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    storage : {},
    count: 0
  };
  _.extend(someInstance, stackMethods);
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



// var stack1 = Stack();
// console.log('stack1', stack1);
// stack1.push('a');
// console.log('stack1-2', stack1);
// console.log('stack1.storage', stack1.storage);

// var extend = function(to, from){
//   for(var key in from){
//     to[key] = from[key];
//   }
// };
//
// var someMethods = {};
// someMethods.move=function(){
//   this.position +=1;
// };
//
// var Car = function(position){
//   var someInstance = {
//     position: position
//   };
//   extend(someInstance, someMethods);
//   return someInstance;
// };
//
// var car1 = Car(5);
// car1.move();
// console.log(car1);
