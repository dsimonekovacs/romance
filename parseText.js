function cleanString (string) {
    string = string.replace(/[\.,\/#!$%\^&\*;:{}=\-_`~()]/g,''); // remove punctuation
    string = string.replace(/\s+/g,' '); // convert white space to space
    string = string.replace(/^\s+/g, ''); // remove white space in beginning
    string = string.replace(/\s+$/, ''); // remove white space from end
    return string;
}

function parseText (string) {
    string = cleanString(string);
    string.split(' ');
    return string;
}

module.exports = parseText