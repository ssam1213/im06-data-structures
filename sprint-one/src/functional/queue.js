var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enCount = 0, deCount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enCount] = value;
    enCount++;
  };

  someInstance.dequeue = function() {
    deCount ++;
    return storage[ deCount - 1];
  };

  someInstance.size = function() {
    if(enCount<deCount) return 0;
    return enCount-deCount;
  };

  return someInstance;
};
