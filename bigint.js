// bigint.js
// A Big Integer implementation in Javascript

var BigInt = function() {
	var digits = [0],		// Store digits least-significant first
		negative = false;	// Flag for negativity
	
	// Set bigint to an arbitrary string of digits
	this.set = function(s) {
		digits = [];
		for (var i=s.length-1;i>=0;i--) {
			digits.push(parseInt(s[i]));
		}
		return this;
	};
	// Convert this bigint to its digit-string
	this.str = function() {
		var s = '';
		for (var i=digits.length-1;i>=0;i--) {
			s += digits[i];
		}
		return s;
	};
	// Increment this bigint
	this.inc = function() {
		var i = 0;
		digits[i]++;
		while (digits[i] > 9 && i < digits.length-1) {
			digits[i] -= 10;
			i++;
			digits[i]++;
		}
		if (digits[i-1] > 9 && i >= digits.length-1) {
			digits[i-1] -= 10;
			digits.push(1);
		}
		return this;
	};
};
