#!/usr/bin/env node

var isPrime = function(n) {

//console.log("Testing " + n + " for primality.");

	if (n < 2) return false;

	var divisible = false;

	// process every number above one, below the target
	for (var i = 2; i < n; i++)
	{
		divisible = (n % i) == 0;
		
		// If it's evenly divislbe here, it's not prime
		// jump out of the loop
		if (divisible)
		{
			//console.log("Evenly divisible too early, punching out!");
			break;
		}
	}

	return !divisible;
}

// print
var fmt = function(arr)
{ 
	return arr.join(",");
};

// n = number of primes to collect
var primeGenerator = function(n)
{
	var arr = [];

	// 2 is the first prime
	var seed = 2;

	while (arr.length < n)
	{ 
		if (isPrime(seed))
		{
			arr.push(seed);
		}
		seed++;
	}

	return arr;	
}

var numPrimes = 100;

//console.log("It's prime time! Requesting " + numPrimes + " prime numbers.");
console.log(fmt(primeGenerator(numPrimes)));
