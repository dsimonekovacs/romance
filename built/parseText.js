"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cleanString = function (string) {
    string = string.replace(/[\.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''); // remove punctuation
    string = string.replace(/\s+/g, ' '); // convert white space to space
    string = string.replace(/^\s+/g, ''); // remove white space in beginning
    string = string.replace(/\s+$/, ''); // remove white space from end
    return string;
};
var parseText = function (string) {
    string = cleanString(string);
    return string.split(' ');
};
exports.default = parseText;
