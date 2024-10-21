#!/usr/bin/env node

function makeVeryDisco(word) {
    const midpoint = Math.ceil(word.length / 2);
    return word.slice(midpoint) + word.slice(0, midpoint);
}


const input = process.argv[2];

if (!input) {
    console.error("Please provide an argument!");
    process.exit(1);
}


if (input.includes(' ')) {

    const veryDiscoSentence = input.split(' ').map(makeVeryDisco).join(' ');
    console.log(veryDiscoSentence);
} else {
    console.log(makeVeryDisco(input));
}