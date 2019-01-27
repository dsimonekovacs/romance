function markovChain(textArray) {
    var markovObject = {};
    // if (textArray.length = 0) {
    //     return undefined;
    // } else {
    //     let word = textArray
    // }
    for (var i = 0; i < textArray.length; i++) {
        var word = textArray[i];
        var nextWords = [];
        var newWord = textArray.slice(i + 1, i + 2);
        nextWords.push(newWord);
        markovObject.word = nextWords;
    }
    return markovObject;
}
var text = ['ever', 'since', 'i', 'left', 'the', 'city', 'you', 'you', 'you', 'you', 'and', 'me', 'we', 'just', 'dont', 'get', 'along'];
console.log(markovChain(text));
