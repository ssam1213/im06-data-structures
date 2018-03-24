var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  if(item in this._storage){
    return true;
  } return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//  A set class, in prototypal style, with the following properties:
// An .add() method, takes any string and adds it to the set
// A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
// A .remove() method, takes any string and removes it from the set, if present
// What is the time complexity of the above functions?
// Note: Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.
// Note: Until the advanced section, your sets should handle only string values.
// Note: This is a rather simple data structure. Take a look at the Wikipedia entry. Which native Javascript type fits the requirements best?
