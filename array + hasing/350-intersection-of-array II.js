// 1ms, 54.5mb
function intersect(nums1, nums2) {
	let freq = {}
	let ansArr = []
	// Choose shorter array
	let [short, long] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1]
	// Build frequency map
	for (let num of short) {
		freq[num] = (freq[num] || 0) + 1
	}
	// Find intersection
	for (let num of long) {
		if (freq[num] > 0) {
			ansArr.push(num)
			freq[num]--
		}
	}
	return ansArr
}

// comment:

// cannot use the set method again as this time the duplicate matters as well
// so first find the shorter arr, and then build a freqeuncy map of that arr
// (use console.log(short) to check the result)
//
// then decrease the freqeunce with each letter in the longer arr
// and push the char into the answer arr

