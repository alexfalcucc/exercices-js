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

document.writeln('\narray-> ' + array + "\ncumprimento-> " +  array.length);
/*
for (var i = 0; i < array; i += 1) {
	document.writeln(array(i));
}
*/
var data = [10,10,10];

var add = function (a, b) {
	result = a + b;
	return result;
}

var mult = function (a, b) {
	resultmul = a * b;
	return resultmul;
}

var sum = data.reduce(add, 0);
document.write("Array add numbers: " + sum);

var mult = data.reduce(mult, 1);
document.write("\nArray multiplied: " + mult)

data.total = function () {
	return this.reduce(add, 0);
};

total = data.total();
document.write("\nTotal: " + total);

// methods at array
var matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];

Array.matrix = function (m, n, initial) {
	var a, i, j, mat = [];
	for (i = 0; i < m; i += 1) {
		a = [];
		for (j = 0; j < n; j +=1) {
			a[j] = initial;
		}
		mat[i] = a;
	}
	return mat;
};

// Make a 4 * 4 matrix filled with zeros.
var myMatrix = Array.matrix(4,4,0);
document.writeln("\nElement at matrix: " + myMatrix[3][3]);

// Method to make an identity matrix.
Array.identity = function (n) {
	var i, mat = Array.matrix(n, n, 0);
	for (i = 0; i < n; i += 1) {
		mat[i][i] = 1;
	}
	return mat;
};

myMatrix = Array.identity(4);

document.writeln("\nMatrix identity: " + myMatrix[3][3]);