function markovChain(textArray) {
    let markovObject = {};

    // if (textArray.length = 0) {
    //     return undefined;
    // } else {
    //     let word = textArray
    // }

    for (let i = 0; i < textArray.length; i++) {
        let word = textArray[i];
        let nextWords = [];

        let newWord = textArray.slice(i + 1, i + 2);
        nextWords.push(newWord);
        markovObject.word = nextWords;
    }
    return markovObject;
}

let text = [ 'ever', 'since', 'i', 'left', 'the', 'city', 'you', 'you', 'you', 'you', 'and', 'me', 'we', 'just', 'dont', 'get', 'along']

console.log(markovChain(text))