// Create a function that takes a string of name and checks how much good is in the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.

/*
score <= 60:   "NOT TOO GOOD"

61 <= score <= 300:  "PRETTY GOOD"

301 <= score <= 599:  "VERY GOOD"

score >= 600:  "THE BEST"
*/

// i - string
// o - string  -- ranking
// e - non strings, non-letter characters, caps don't matter
// c - na

const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405,
"U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23};

function nameScore(name) {
	// edge cases
    // return invalid
  // split string into an array
  // declare a score variable set 0
  // iterate over the array
    // if it's not included in scores object
      // continue
    // add number that matches letter in the object to the score
  // score conditional
    // return that ranking
  if (typeof name !== 'string') { return 'invalid' }
  const nameArray = name.split('');
  let score = 0;
  for (let character of nameArray) {
    if (!scores[character.toUpperCase()]) { continue; }
    score += scores[character.toUpperCase()];
  }
  if (score <= 60) { return 'NOT TOO GOOD' }
  if (score >= 61 && score <= 300) { return 'PRETTY GOOD' }
  if (score >= 301 && score <= 599) { return 'VERY GOOD' }
  if (score >= 600) { return 'THE BEST' }
}

console.log(nameScore('J'));