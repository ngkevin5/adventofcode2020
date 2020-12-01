
const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day1input.txt').toString();
    return inputArray = input.split('\r\n');
}

const partOne = () => {
    const targetSum = 2020;
    const seen = {};
    const inputArray = getInput();

    for (let i = 0; i < inputArray.length; i++) {
        let complement = targetSum - Number(inputArray[i]);
        if (seen[complement]) {
            return complement * Number(inputArray[i]);
        }

        seen[Number(inputArray[i])] = true;
    }
}

const partTwo = () => {
    let inputArray = getInput;

}

console.log(partOne());