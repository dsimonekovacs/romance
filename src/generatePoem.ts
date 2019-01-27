import parseText from './parseText'
import markovChain from './markovChain'
import writeLine from './writeLine'


export default function generatePoem(text, numLines) {
    let parsed = parseText(text);
    let chain = markovChain(parsed);

    for (let i = 0; i < numLines; i++) {
        writeLine(chain, Math.ceil(Math.random()*10))
    }
}