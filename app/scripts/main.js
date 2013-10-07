// Types...

// - Primitive(work on its value) and Complex(work on a ref. to its value)...
// - Primitive Types: number, boolean, string, null, and undefined...
// - Complex Types: array, function, and object...

// - Primitives:

var a = 23;
var b = a;
b = 24;
console.log(a, b);
console.log(a === b); // false...

// - Complex:

var c = ['What\'s', 'up?'];
var d = c;
console.log(c, d);
d[0] = 'What';
d[1] = 'sup?';
console.log(c, d);
console.log(c === d); // true...

// - More examples:

var e = 'Byrdann';
var f = new String('Fox');
console.log(e + ' ' + f); // Byrdann Fox...
console.log(typeof e, typeof f); // string, object...
console.log(e instanceof String, f instanceof String); // false, true...
console.log(e.substr == f.substr, e.substr === f.substr); // true, true...
console.log(e == f, e === f); // false, false...

// Define types the 'literal' way!...

console.log(null, undefined, 0, '');

var g = 0;
if (g) { // if g is a truthy value...
	// will not execute, because g is 0; a.k.a. false...
} else {
	console.log(g == false, g === false); // true, false...
}

console.log(typeof null == 'object', typeof null === 'object'); // true, true...
console.log(typeof [] == 'object', typeof [] === 'object'); // true, true...

// What are 'Browser Frames'?

// Functions are 'first-class'...a.k.a: they can be stored in variables as ref's.

var h = function (a, b) { return a + b; };
console.log(h); // returns the function...
console.log(h(20, 3)); // 23...

var i = function i (a, b) { return a * b; };
console.log(i); // return the function...
console.log(i(20, 3)); // 60...
console.log('function' == typeof i, 'function' === typeof i); // true, true...

function j () {
	console.log(window == this, window === this);
}
j();

// The point of changing the 'this' ref. using .call/.apply?
// Global namespace mitigation?

function k () {
	// 'this' === 'window' global object...
	console.log(this, this.a);
	console.log(this.a == 'b', this.a === 'b');
}
// Change the ref. of 'this'...
k.call({a: 'b'});

function l (a, b) {
	console.log(this, this.a);
	console.log(a === 'first', b === 'last');
}
l.call({a: 'b'}, 'first', 'last');
l.apply({a: 'b'}, ['first', 'last']);

function m (a, b, c) {
	console.log(this);
	var val = a + " " + b + " " + c;
	console.log(val);
	console.log(m);
}
m.call({z: 'zz'}, 'Ryan', 'Matthew', 'Poplin');

// 'Function Arity' === number of args the function was declared with...

var n = function (p, o, p, l, i, n, r) {};
console.log(n.length, n.length === 7);

// Closures...

// It's not working...
var o = 23;
var byrdann = 'foxx';
function poplinr () {
	console.log(o === 23); // Supposed to be 'true'...
	var o = 24;
	console.log(o);
	console.log(byrdann); // Supposed to be 'foxx'...
	var byrdann = 'byrdann foxx'
	function test () {
		console.log(byrdann);
		console.log(o === 24); // true...
	}
	test();
}
poplinr();
// It's not working ends...

var p = 23;
(function(){
	var p = 24;
	console.log(p);
})();
console.log(p === 23); // true...





