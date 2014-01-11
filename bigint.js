// bigint.js
// A Big Integer implementation in Javascript

var BigInt = function() {

	this.digits = [0];		// Store digits least-significant first
	this.negative = false;	// Flag for negativity
	
	// Set bigint to an arbitrary string of digits
	this.set = function(s) {
		this.digits = [];
		var start;
		if (s[0] == '-') {
			start = 1;
			this.negative = true;
		}
		else {
			start = 0;
			this.negative = false;
		}
		for (var i=s.length-1;i>=start;i--) {
			this.digits.push(parseInt(s[i]));
		}
		return this;
	};
	// Convert this bigint to its digit-string
	this.str = function() {
		var s = '';
		if (this.negative) { s += '-'; }
		for (var i=this.digits.length-1;i>=0;i--) {
			s += this.digits[i];
		}
		return s;
	};
	
	// COMPARISONS
	
	// Equality
	this.eq = function(n) {
		if (this.negative != n.negative || this.digits.length != n.digits.length) {
			return false;
		}
		else {
			for (var i=0,l=this.digits.length;i<l;i++) {
				if (this.digits[i] != n.digits[i]) {
					return false;
				}
			}
			return true;
		}
	};
	// Helper: Is the magnitude of m less than the magnitude of n?
	function lmag(m,n) {
		if (m.digits.length < n.digits.length) {
			return true;
		}
		else if (m.digits.length > n.digits.length) {
			return false;
		}
		else {
			for (var i=m.digits.length-1;i>=0;i--) {
				if (m.digits[i] < n.digits[i]) {
					return true;
				}
				else if (m.digits[i] > n.digits[i]) {
					return false;
				}
			}
			return false;
		}
	}
	// Helper: Is the magnitude of m greater than the magnitude of n?
	function gmag(m,n) {
		if (m.digits.length > n.digits.length) {
			return true;
		}
		else if (m.digits.length < n.digits.length) {
			return false;
		}
		else {
			for (var i=m.digits.length-1;i>=0;i--) {
				if (m.digits[i] > n.digits[i]) {
					return true;
				}
				else if (m.digits[i] < n.digits[i]) {
					return false;
				}
			}
			return false;
		}
	}
	// Less Than
	this.lt = function(n) {
		if (!this.negative && n.negative) {			// Positive ints are never less than negative ints
			return false;
		}
		else if (this.negative && !n.negative) {	// Negative ints are always less than positive ints
			return true;
		}
		else if (this.negative) {	// Both ints are negative: this < n iff this.mag > n.mag
			return gmag(this,n);
		}
		else {						// Both ints are positive: this < n iff this.mag < n.mag
			console.log('LMAG');
			return lmag(this,n);
		}
	};
	// Greater Than
	this.gt = function(n) {
		if (!this.negative && n.negative) {			// Positive ints are always greater than negative ints
			return true;
		}
		else if (this.negative && !n.negative) {	// Negative ints are never greater than positive ints
			return false;
		}
		else if (this.negative) {	// Both ints are negative: this > n iff this.mag < n.mag
			return lmag(this,n);
		}
		else {						// Both ints are positive: this > n iff this.mag > n.mag
			return gmag(this,n);
		}
	};
	
	// INCREMENT AND DECREMENT
	
	// Helper: Increment the absolute value
	function _inc() {
		var i = 0;
		this.digits[i]++;
		while (this.digits[i] > 9 && i < this.digits.length-1) {
			this.digits[i] = 0;
			i++;
			this.digits[i]++;
		}
		if (this.digits[i-1] > 9 && i >= this.digits.length-1) {
			this.digits[i-1] = 0;
			this.digits.push(1);
		}
	}
	// Helper: Decrement the absolute value
	function _dec() {
		var i = 0;
		this.digits[i]--;
		while (this.digits[i] < 0 && i < this.digits.length-1) {
			this.digits[i] = 9;
			i++;
			this.digits[i]--;
		}
		if (this.digits[this.digits.length-1] == 0 && this.digits.length > 1) {
			this.digits.pop(this.digits.length-1);
		}
	}
	// Increment this bigint
	this.inc = function() {
		if (this.negative) {
			_dec();
		} else {
			_inc();
		}
		return this;
	};
	// Decrement this bigint
	this.dec = function() {
		if (this.negative) {
			_inc();
		} else {
			_dec();
		}
		return this;
	};
	
	// ADDITION AND SUBTRACTION
	
	function _add(m,n) {
		var sum = new BigInt(), sd = [], md = m.digits, nd = n.digits;
		
		
		
		return sum;
	}
	
	// Addition
	this.add = function(n) {
		return _add(this,n);
	};
};
