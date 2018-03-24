var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {

    var newNode = new Node(value);
    // console.log('newNode', newNode);
    // console.log(newNode.value);

    if(list.head ===null){
      list.head = newNode;
      list.tail = newNode;
    }

      list.tail.next = newNode;
      list.tail = newNode;
      // console.log(list.tail);

  };
  // console.log('list', list);
  list.removeHead = function() {
    list.head = list.head.next;
    return list.head.value;
  };

  list.contains = function(target) {
    var start = list.head;
    while(start){

      if(start.value===target ) return true;
      start = start.next;

    }return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};
  // console.log(node);
  node.value = value;
  node.next = null;

  return node;
};
// var linkedList = new LinkedList();
// linkedList.addToTail(4);
// linkedList.addToTail(5);
// console.log(linkedList);
// console.log('linkedList', linkedList);
// console.log(linkedList.contains(4));
// console.log(linkedList.contains(5));


/*
 * Complexity: What is the time complexity of the above functions?
 */
