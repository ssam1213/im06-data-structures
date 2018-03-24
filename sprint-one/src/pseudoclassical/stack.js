var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;

};

Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};
Stack.prototype.pop = function() {
  this.count--;
  return this.storage[this.count];
};
Stack.prototype.size = function() {
  if(this.count<0) return 0;
  return this.count;
};


 var stack = new Stack();
 console.log(stack);



// var Car = function(position){
//   this.position = position;
// };
//
// Car.prototype.move = function(){
//   this.position +=1;
// };
//
// var car1 = new Car(5);
//
// console.log(car1);
