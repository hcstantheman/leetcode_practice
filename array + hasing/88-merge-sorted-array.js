// 0ms, 54.44 mb
let merge = function(nums1, m, nums2, n) {
	let firstIdx = m - 1
	let secondIdx = n - 1
	let globalIdx = m + n - 1
	while (secondIdx >= 0) {
		if (firstIdx >= 0 && nums1[firstIdx] > nums2[secondIdx]) {
			console.log('playing in first array', nums1[firstIdx], nums2[secondIdx])
			console.log(nums1)
			nums1[globalIdx] = nums1[firstIdx]
			console.log(`afterwards: ${nums1}`)
			firstIdx--
		} else {
			console.log('playing in second array', nums1[firstIdx], nums2[secondIdx])
			console.log(nums1)
			nums1[globalIdx] = nums2[secondIdx]
			console.log(`afterwards: ${nums1}`)
			secondIdx--
		}
		globalIdx--
	}
	return nums1
}
// 0ms, 54.8mb
let simpleSolution = (nums1, m, nums2, n) => {
	nums1.splice(m, n)
	nums1.push(...nums2)
	nums1.sort((a, b) => a - b)
	return nums1
}

console.log(merge([1,2,3,0,0,0], 3, [1,3,6], 3))

// comment:
//
// the best way to visualise it will be printing out the output...