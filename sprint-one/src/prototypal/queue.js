var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.enCount = 0;
  someInstance.deCount = 0;

  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.enCount] = value;
  this.enCount++;
};

queueMethods.dequeue = function() {
  this.deCount ++;
  return this.storage[ this.deCount - 1];
};

queueMethods.size = function() {
  if(this.enCount<this.deCount) return 0;
  return this.enCount-this.deCount;
};
