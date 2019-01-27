const cleanString = (string: string): string => {
    string = string.replace(/[\.,\/#!$%\^&\*;:{}="\-_`~()]/g,''); // remove punctuation
    string = string.replace(/\s+/g,' '); // convert white space to space
    string = string.replace(/^\s+/g, ''); // remove white space in beginning
    string = string.replace(/\s+$/, ''); // remove white space from end
    return string;
}

const parseText = (string: string): Array<string> => {
    string = cleanString(string);
    return string.split(' ');
}

export default parseText
