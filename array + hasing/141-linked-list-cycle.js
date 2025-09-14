// 67ms, 59.8mb
let hasCycle = function(head) {
	if (!head || !head.next) return false
	let set = new Set()
	let current = head
	while (current) {
		if (set.has(current)) return true
		set.add(current)
		current = current.next
	}
	return false
}

// Floyd’s Cycle Detection, 52ms, 58mb
let quickerSolution = (head)=> {
	let slow = head
	let fast = head
	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
		if (slow === fast) return true
	}
	return false
}

// comment:
//
// the quicker one will be a step quicker each time, and eventually will get to the slow step
// and hence returning to the slow step
// it is some number theory thing though... that it will guarantee that those two will collide