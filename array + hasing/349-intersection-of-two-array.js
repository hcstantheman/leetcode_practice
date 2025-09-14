var intersection = function(nums1, nums2) {
	return Array.from(new Set(nums1).intersection(new Set(nums2)))
};

// comment:
// all that is needed is just the duplicates of both arrays.
// using loop will be tough, and set is storing unique values
// without worry too much of the order. In this case it is a good tool

// set comes with some intersection, union, functions from the set theory
// hope you all are familiar with the Venn Diagram..