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

const getSumOfRange = (input, index1, index2) => {
    let sum = input[index1];
    for (let i = index1 + 1; i <= index2; i++) {
        sum += input[i];
    }

    return sum;
}

const partTwo = () => {
    const input = getInput();
    let i = 0;
    let j = 1;
    let target = 144381670;
    let sum = 0

    while (j < input.length && sum !== target) {

        while (sum < target) {
            j++;
            sum = getSumOfRange(input, i, j);
        }

        while (sum > target) {
            i++;
            sum = getSumOfRange(input, i, j);
        }
    }

    let result = [];
    for (let start = i; start <= j; start++) {
        result.push(input[start]);
    }

    result = result.sort(function (a, b) {
        return a - b;
    });

    return result[0] + result[result.length - 1];
}

console.log(partOne());
console.log(partTwo());
