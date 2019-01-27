interface markovObject {
    word?: Array<string>
}

export default function markovChain(textArray) {
    let markovObject: markovObject = {};

    for (let i = 0; i < textArray.length; i++) {
        let word = textArray[i];
        let nextWords = [];

        let newWord = textArray.slice(i + 1, i + 2);
        nextWords.push(newWord);
        let newArray = [].concat.apply([], nextWords);
        markovObject[word] = newArray;
    }
    return markovObject;
}

