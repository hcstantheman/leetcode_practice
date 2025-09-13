let twoSum = (nums, target) =>{
	if (nums.length === 2) return [0, 1]

	let map = new Map()

	for (let i =0 ; i<nums.length; i++){
		let complement = target - nums[i]
		if (map.has(complement)) {
			return[map.get(complement), i]
		}
		map.set(nums[i], i)
	}
}

