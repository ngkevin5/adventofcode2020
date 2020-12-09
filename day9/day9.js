const { ifError } = require('assert');

const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day9input.txt').toString();
    let inputArray = input.split('\r\n');
    return inputArray.map((number) => {
        return Number(number);
    })
}

const getValidSums = (input, index, preambleLength) => {
    let start = index - preambleLength;
    let end = index + preambleLength;

    if (start < 0) {
        start = 0;
    }

    if (end >= input.length) {
        end = input.length - 1;
    }

    let validSums = {};
    for (let i = start; i < end; i++) {
        for (let j = i + 1; j < end; j++) {
            validSums[input[i] + input[j]] = true;
        }
    }

    return validSums;
}

const partOne = () => {
    const input = getInput();
    const preambleLength = 25;

    for (let i = preambleLength; i < input.length; i++) {
        const sums = getValidSums(input, i, preambleLength);
        if (!sums[input[i]]) {
            return input[i];
        }
    }


}

console.log(partOne());