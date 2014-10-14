//document.writeln("Do you like coffee?");

var num = 10;

var factorial = function factorial(i, a) {
	a = a || 1;
	if(i < 2) {
		return a;
	}
	return factorial(i - 1, a * i);
};


//fibonacci version one
var fibonacci = function (n) {
	return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

for (var i = 0; i <= 10; i += 1) {
	document.writeln("fibonacci de " + i + " é " + fibonacci(i));
}

//fibonacci step two
var fibonacci = function() {
	var memo = [0, 1]
	var fib = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fib(n - 1) + fib(n - 2);
			memo[n] = result;			
		}
		return result;
	};
	return fib;
}();


var array = ["zero", "one", "two"];

console.log(array);
