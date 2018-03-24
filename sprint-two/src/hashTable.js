

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = {};
  bucket[k] = v;
  console.log(bucket);
  if (this._storage.get(index)) {
    this._storage.get(index)[k] = v;

  } else {
    this._storage.set(index, bucket);
  }
  // console.log(this._storage);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k];
};

// var test = new HashTable();
// test.insert(v1, v1);
// test.insert(v2, v2);
// console.log(test.retrieve(v1));


/*
 * Complexity: What is the time complexity of the above functions?
 */
