var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.enCount = 0;
  this.deCount = 0;
};

Stack.prototype.enqueue = function(value) {
  this.storage[this.enCount] = value;
  this.enCount++;
};

Stack.prototype.dequeue = function() {
  this.deCount ++;
  return this.storage[ this.deCount - 1];
};

Stack.prototype.size = function() {
  if(this.enCount<this.deCount) return 0;
  return this.enCount-this.deCount;
};
