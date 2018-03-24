var BinarySearchTree = function(value) {
  var binary = Object.create(treeMethod);
      binary.value = value;
      binary.left = null;
      binary.right = null;
      // console.log('binary', binary);
      return binary;
};

var treeMethod = {};

  treeMethod.insert = function(value) {
    var newTree = new BinarySearchTree(value);
    // console.log('newTree', newTree);
    // newTree.value = value;
    if(this.value>newTree.value){
      if(this.left===null){
        this.left = newTree;
      } else {
        // console.log('this.left', this.left);
        this.left.insert(value);
      }
    }
    if(this.value<newTree.value){
      if(this.right===null){
        this.right = newTree;
      } else {
        this.right.insert(value);
      }
    }
};


  treeMethod.contains = function(target){
    // console.log(target);
    // var result = false;
    // var findChild = function(obj) {
    //   if(obj.value===target){
    //     result = true;
    //   }
    //   for(var i=0; i<obj.children.length; i++){
    //       findChild(obj.children[i]);
    //   }
    // };
    // findChild(this);
    // return result;
    // console.log(this.value);
    var result = false;

    if(this.value == target){
      result = true;
    } else {
      if(this.value>target){
        if(this.left !== null){
          return this.left.contains(target);
        }
      }
      if(this.value<target){
        if(this.right !== null){
          return this.right.contains(target);
        }
      }
    }
    return result;
  };
  treeMethod.depthFirstLog = function(func){
    var array = [];
    if(this.value){
      func(this.value);
    }
    if(this.left !== null){
      this.left.depthFirstLog(func);
    }
    if(this.right !== null){
      this.right.depthFirstLog(func);
    }
    return array;
  };

var test = new BinarySearchTree(5);
test.insert(2);
test.insert(3);

console.log(test);
console.log(test.contains(2));
// console.log(test.contains(7));
// test.insert(6);
// console.log('init ', test);
// console.log(test.right.left.value);
// test.insert(7);
// test.insert(6);

// test.insert(6);
// console.log(test);
// console.log(test.value);


/*
 * Complexity: What is the time complexity of the above functions?
 */
