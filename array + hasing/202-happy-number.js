let isHappy = (n) => {
	let seen = new Set()
	while (n !== 1) {
		let digits = n.toString().split('');
		n = digits.reduce((sum, d) => sum + Number(d) * Number(d), 0);
		if (seen.has(n)) return false;
		seen.add(n);
	}
	return true;
}
isHappy(123)

// comment:
//
// reduce is essentially take an iterative object, loop over and return a SINGLE output
// so you can imagine what you what to do with each element to summarise the whole array