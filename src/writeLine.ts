// Create a function writeLine that takes a Markov Chain (object) 
// and a length of words n and returns a line of poetry.
// When a word has no entries in it's Markov Chain, the program should choose a 
// new word and continue the line until it meets the word count.

// writeLine will need a helper function that takes a word and randomly 
// chooses a word from its Markov Chain array. 

function randomWord (stringArray) {
    return stringArray[Math.floor(Math.random()*stringArray.length)];
}

export default function writeLine (markovChain, lineLength) {
    let word = randomWord(Object.keys(markovChain));
    let poetryLine = word;

    for (let i = 0; i < lineLength - 1; i++) {
        if (markovChain[word].length  === 0) {
            word = randomWord(Object.keys(markovChain));
        } else {
            word = randomWord(markovChain[word]);
        }
        poetryLine += ` ${word}`
    }
    console.log(poetryLine.toLowerCase());
}