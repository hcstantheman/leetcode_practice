//20ms, 57mb
var missingNumber = function(nums) {
	switch(nums.length){
		case 0:
			return 0
		case 1:
			if (nums[0] === 0) {
				return 1
			} else {
				return 0
			}

	}
	nums.sort((a, b) => a - b)
	if (nums[0] !== 0) return 0
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === i) continue
		return i
	}
	return nums.length
}

// 0ms, 56mb
var elegantSolution = (nums) => {
	//account for the last digit of array
	let xor = nums.length
	for (let i = 0; i < nums.length; i++) {
		xor ^= nums[i] ^ i
	}
	console.log(xor)
}

elegantSolution([9,6,4,2,3,5,7,0,1])

// comment:
//
// with the property of a ^ a = 0, then we will need to consider how to generate the [0, n] array
// and ensure that each number in the nums arr will cancel out the number in the [0, n] array..