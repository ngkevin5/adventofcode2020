
const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day1input.txt').toString();
    let inputArray = input.split('\r\n');
    return inputArray.map((number) => {
        return Number(number);
    })
}

const partOne = () => {
    const targetSum = 2020;
    const seen = [];
    const inputArray = getInput();

    for (let i = 0; i < inputArray.length; i++) {
        let complement = targetSum - inputArray[i];
        if (seen[complement]) {
            return complement * inputArray[i];
        }

        seen[inputArray[i]] = true;
    }
}

const partTwo = () => {
    const targetSum = 2020;
    const inputArraySorted = getInput().sort(function (a, b) { return a - b });
    let left = 0;
    let right = inputArraySorted.length - 1;

    for (let i = 0; i < inputArraySorted.length - 2; i++) {
        left = i + 1;
        right = inputArraySorted.length - 1;
        while (left < right) {
            let currentSum = inputArraySorted[i] + inputArraySorted[left] + inputArraySorted[right];
            if (currentSum > targetSum) {
                right = right - 1;
            } else if (currentSum < targetSum) {
                left = left + 1;
            } else if (currentSum === targetSum) {
                return (inputArraySorted[i] * inputArraySorted[left] * inputArraySorted[right])
            }
        }
    }

}

console.log(partOne());
console.log(partTwo());