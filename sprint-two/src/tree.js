var Tree = function(value) {
  // var newTree = Object.create(treeMethods);
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree1 = new Tree(value);

  this.children.push(tree1);

};

treeMethods.contains = function(target) {

    var result = false;
    var findChild = function(obj) {
      if(obj.value===target){
        result = true;
      }
      for(var i=0; i<obj.children.length; i++){
          findChild(obj.children[i]);
      }
    };
    findChild(this);
    return result;

    // console.log(this);
    // var findChild = function(){
    //   if(this.children===target){
    //     return true;
    //   }
    // }
};
// var test = new Tree(1);
// console.log(test);
//
//
// console.log(test.addChild(2));
// console.log(test.addChild(3));
// console.log(test.addChild(4));
// console.log(test);
// /*
 // * Complexity: What is the time complexity of the above functions?
 // */
