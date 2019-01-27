interface markovObject {
    word?: Array<string>
}

export default function markovChain(textArray) {
    let markovObject: markovObject = {};

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
        [].concat.apply([], nextWords);
        markovObject.word = nextWords;
    }
    return markovObject;
}

