// 21ms, 59.3mb
function canConstruct(ransomNote, magazine) {
	let freq = {}
	// Count frequencies in magazine
	for (let char of magazine) {
		freq[char] = (freq[char] || 0) + 1
	}
	// Check ransomNote
	for (let char of ransomNote) {
		if (!freq[char] || freq[char] === 0) return false
		freq[char]--
	}
	return true
}

// 2ms, 60mb
let elegantSolution = (ransomNote, magazine) => {
	for(let char of ransomNote) {
		let mLetterPos = magazine.indexOf(char);
		if(mLetterPos === -1) return false;
		magazine = magazine.replace(char, "*")
	}
	return true
}

