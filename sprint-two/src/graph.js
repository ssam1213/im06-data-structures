
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(node in this.nodes) return true;
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // console.log('node', node);
  delete this.nodes[node];
  delete this.edges[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(fromNode in this.edges && toNode in this.edges ) return true;
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode]=true;
  this.edges[toNode]=true;
  // console.log(this.edges);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode];
  delete this.edges[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(item){
    cb(item);
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // var test = new Graph();
 // test.addNode(3);
 // test.addNode(7);
 // test.addEdge(3, 7);
 // console.log(test);
 // console.log(test.);
// delete test.nodes[3];
// console.log(7 in test.nodes);
// test.nodes.hasOwnProperty(3);
//  console.log(test.nodes);
// delete test.edges[[3, 7]];
//  console.log(test);
