function ends() {
	var txt
	if (confirm('Press a button!')) {
		txt = 'You pressed OK!'
	} else {
		txt = 'You pressed Cancel!'
	}
	document.getElementById('demo').innerHTML = txt
}
var playerScore = 0
var compScore = 0
var totalMoves = 0

function game() {
	let text
	let input = prompt('r/p/s')
	var rps = ['r', 'p', 's']
	var comp = rps[getRandomInt(3)]
	console.log(comp)
	console.log(input)
	//logic
	if (input == null || input == '') {
		text = 'User cancelled the prompt.'
	} else if (
		input.toLowerCase() == 'r' ||
		input.toLowerCase() == 'p' ||
		input.toLowerCase() == 's'
	) {
		//rock
		if (input.toLowerCase() == 'r') {
			if (comp == 'r') {
				text = 'comp chose rock, TIE'
				totalMoves++
			} else if (comp == 'p') {
				text = 'comp chose paper, COMP WINS'
				compScore++
				totalMoves++
			} else {
				text = 'comp chose scissors, YOU WIN'
				playerScore++
				totalMoves++
			}
			//paper
		} else if (input.toLowerCase() == 'p') {
			if (comp == 'r') {
				text = 'comp chose rock, YOU WIN'
				playerScore++
				totalMoves++
			} else if (comp == 'p') {
				text = 'comp chose paper, TIE'
				totalMoves++
			} else {
				text = 'comp chose scissors, COMP WINS'
				compScore++
				totalMoves++
			}
			//scissors
		} else if (input.toLowerCase() == 's') {
			if (comp == 'r') {
				text = 'comp chose rock, COMP WINS'
				compScore++
				totalMoves++
			} else if (comp == 'p') {
				text = 'comp chose paper, YOU WIN'
				playerScore++
				totalMoves++
			} else {
				text = 'comp chose scissors, TIE'
				totalMoves++
			}
		} else {
			text = "Somehow there's an error"
		}
	}
	document.getElementById('text').innerHTML = text
	document.getElementById('user-score').innerHTML = `User Score: ${playerScore}`
	document.getElementById(
		'comp-score'
	).innerHTML = `Computer Score: ${compScore}`
	document.getElementById('moves').innerHTML = `Moves: ${totalMoves}`
}
function getRandomInt(max) {
	return Math.floor(Math.random() * max)
}
