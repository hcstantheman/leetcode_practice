// 6ms, 56.4 mb
var isIsomorphic = function(s, t) {
	if (s.length !== t.length) return false
	let map = new Array(256).fill(null)
	let used = new Set()
	for (let i = 0; i < s.length; i++) {
		let sCode = s.charCodeAt(i)
		if (map[sCode] === null) {
			if (used.has(t[i])) return false
			map[sCode] = t[i]
			used.add(t[i])
			continue
		}
		if (map[sCode] !== t[i]) return false
	}
	return true
}
// 7ms, 55 mb
quickerExample = (str1, str2) => {
	if (str1.length !== str2.length) return false
	let firstMap = {}
	let secondMap = {}

	for (let i = 0; i < str1.length; i++) {
		let letter1 = str1[i]
		let letter2 = str2[i]

		if (!firstMap[letter1])
			firstMap[letter1] = letter2
		if (!secondMap[letter2])
			secondMap[letter2] = letter1

		if (firstMap[letter1] !== letter2 || secondMap[letter2] !== letter1)
			return false
	}
	return true
}


// Comment:
// the quicker example does not seem to be quicker (at least on leetcode)
// but i do agree that it is way less complicated than the original one
// dual mapping is to ensure that there is no circular mapping