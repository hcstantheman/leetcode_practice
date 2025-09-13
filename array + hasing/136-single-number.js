//7ms, 57.74mb
let singleNumber = function(nums) {
	if (nums.length === 1) return nums[0]
	let set = new Set()

	nums.forEach(n =>
		set.has(n)? set.delete(n) : set.add(n)
	)
	// got from googling "js get the only value in set"
	return set.values().next().value
}
// 0ms, 57.33mb
let quickerSolution = (nums) => {
	let xor=0
	for(let i=0;i<nums.length;i++) {
		xor ^= nums[i]
	}
	return xor
}

// comment:
//
// the quicker solution is very elegant. it is utilising the properties of boolean algebra XOR
// 1. a ^ b ^ c = a ^ c ^ b
// 2. a ^ a = 0
// 3. a ^ 0 = a
//
// since it is always paired up and there is only one unique number, imagine the following nums array:
//
// [ 2, 1, 2, 3, 5, 3, 5]
//
// the plain calculation will be:
//
// 2 ^ 1 ^ 2 ^ 3 ^ 5 ^ 3 ^ 5
//
// but it can also be arranged to be:
//
// 1 ^ 2 ^ 2 ^ 3 ^ 3 ^ 5 ^ 5 (first property)
//
// from the second property:
//
// 1 ^ (2 ^ 2) ^ (3 ^ 3) ^ (5 ^ 5) = 1 ^ 0 ^ 0 ^ 0
//
// and i shall leave you to prove why it will yield 1

// in real life.. i dont think the companies want you to use it.. just use DSA thing to solve the problem
//
// it is better to use slightly more obvious way to solve, as everyone will have no trouble to understand
