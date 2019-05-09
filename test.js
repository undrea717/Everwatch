var sum = 0;

function getsum(n) {
	// body...
for (var i = 0; i <= n; i++) {
		if (i % 3 == 0 || i % 5 == 0 ) {
			sum = sum +i;
		}
	}
	return sum;		
}
console.log(getsum(1000));
