"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        [].concat.apply([], nextWords);
        markovObject.word = nextWords;
    }
    return markovObject;
}
exports.default = markovChain;
