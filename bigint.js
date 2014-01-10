// bigint.js
// A Big Integer implementation in Javascript

var BigInt = function() {
	var digits = [0],		// Store digits least-significant first
		negative = false;	// Flag for negativity
	
	// Set bigint to an arbitrary string of digits
	this.set = function(s) {
		digits = [];
		var start;
		if (s[0] == '-') {
			start = 1;
			negative = true;
		}
		else {
			start = 0;
			negative = false;
		}
		for (var i=s.length-1;i>=start;i--) {
			digits.push(parseInt(s[i]));
		}
		return this;
	};
	// Convert this bigint to its digit-string
	this.str = function() {
		var s = '';
		if (negative) { s += '-'; }
		for (var i=digits.length-1;i>=0;i--) {
			s += digits[i];
		}
		return s;
	};
	function _inc() {
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
	}
	function _dec() {
		var i = 0;
		digits[i]--;
		while (digits[i] < 0 && i < digits.length-1) {
			digits[i] = 9;
			i++;
			digits[i]--;
		}
		if (digits[digits.length-1] == 0 && digits.length > 1) {
			digits.pop(digits.length-1);
		}
	}
	// Increment this bigint
	this.inc = function() {
		if (negative) {
			_dec();
		} else {
			_inc();
		}
		return this;
	};
	// Decrement this bigint
	this.dec = function() {
		_dec();
		return this;
	};
};
