//17ms, 57.46mb
var isAnagram = function(s, t) {
	if (s.length !== t.length) return false

	let firstAscii = 0
	let secondAscii = 0
	let firstSet = new Set()
	let secondSet = new Set()

	for (let i = 0; i < s.length; i++) {
		firstAscii += s.charCodeAt(i)
		secondAscii += t.charCodeAt(i)
		firstSet.add(s[i])
		secondSet.add(t[i])
	}
	if ( firstAscii !== secondAscii) return false
	for (const item of firstSet) {
		switch(true){
			case !secondSet.has(item):
			case s.split(item).length - 1 !== t.split(item).length - 1:
				console.log(s.split(item))
				return false
		}
	}
	return true
}
// 11ms, 56.69mb
let elegantExample = (s, t) => {
	if (s.length !== t.length) return false

	const sCount = {}
	const tCount = {}

	for (let i = 0; i < s.length; i++) {
		sCount[s[i]] = (sCount[s[i]] || 0) + 1
		tCount[t[i]] = (tCount[t[i]] || 0) + 1
	}
	for (const k of Object.keys(sCount)) {
		if (sCount[k] !== tCount[k]) return false
	}
	return true
}

let quickExample = (s, t) => {
	if(s.length !== t.length){
		return false
	}
	let arr = new Array(26).fill(0);
	for(let i=0;i<s.length;i++){
		arr[s.charCodeAt(i)-97]+=1
		console.log(arr)
	}
	for(let i=0;i<t.length;i++){
		arr[t.charCodeAt(i)-97]-=1
		console.log(arr)
	}
	for(let i=0;i<arr.length;i++){
		if(arr[i] !== 0){
			return false
		}
	}
	return true
}
//3ms, 54mb
let perfectSolution = (s, t) => {
	if(s.length !== t.length) return false
	let arr = new Array(26).fill(0)

	for(let i=0;i<s.length;i++){
		arr[s.charCodeAt(i)-97]+=1
		arr[t.charCodeAt(i)-97]-=1
	}
	// should be all zero, length 1
	return new Set(arr).size === 1
}

console.log(quickExample('anagram', 'nagaram'))
