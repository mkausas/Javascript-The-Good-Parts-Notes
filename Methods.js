// Chapter 8: Methods

// Arrays as Data Structures
// Stack <array>.push(<val>) <array>.pop()
// Queue <array>.push(<val>) <array>.shift()

// to create an alias for a method (or var)
var queue = [];
queue.add = queue.push;
queue.remove = queue.shift;

var binaryTree = [];
binaryTree.left = function(i) {
    return binaryTree[2 * i + 1];
};

binaryTree.right = function(i) {
    return binaryTree[2 * i + 2];
};

// <array>.concat(item,...)
// Produces a new array containing a shallow copy of this 'array' with items appended. If item is an array then its elements will be appended.
var a = ['a', 'b', 'c'];
var b = ['d', 'e', 'f'];
var c = a.concat(b, true);
// c is ['a', 'b', 'c', 'd', 'e', 'f', true]

// <array>.join(seperator)
// Creates a string from an array. Does this by making a string out of each element in the array and concatenating them all together with a seperator between them. Default seperator is ','.
var a = ['a', 'b', 'c'];
var b = a.join('');
// b is 'abc'

// push and pop act like the array is a stack
// <array>.pop()
// <array>.push(item...)

// <array>.reverse()

// <array>.sort()
// custom comparators within sort
var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 42, 23];
m.sort(function(a, b) {
    if (a === b)
        return 0;
   
    if (typeof a === typeof b)
        return a < b ? -1 : 1;
    return typeof a < typeof b ? -1 : 1;
}); 
// returns [4, 8, 15, 16, 23, 43, 'a', 'aa', 'bb']


// <array>.shift()
// remove and return the first element in the array
var a = [1, 2, 3];
a.shift(); 
// a.shift() returns 1, a is [2, 3];

// <array>.slice(start, end=<array>.length)
var a = [1, 2, 3];
var b = a.slice(0, 1);     // b is [1]
var c = a.slice(1);        // c is [2, 3]
var d = a.slice(1, 2);     // d is [2]

// 


// To implement a custom <array> method (or any object)
// ex. implementing the shift method
Array.method('shift', function() {
    return this.slice(0, 1)[0];
});