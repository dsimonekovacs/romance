export default function markovChain(textArray: Array<string>) {
    let markovObject = {};

    for (let i = 0; i < textArray.length; i++) {
        let word = textArray[i];
        let nextWord = textArray.slice(i + 1, i + 2)[0];
        markovObject[word] = markovObject[word] || [];
        if (nextWord !== undefined) {
            markovObject[word].push(nextWord);
        }
    }
    return markovObject;
}
