const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day10input.txt').toString();
    let inputArray = input.split('\r\n');
    return inputArray.map((number) => {
        return Number(number);
    })
}

const addOutlet = (adapters) => {
    return [...adapters, 0]
}

const addDeviceJoltage = (sortedAdapters) => {
    return [...sortedAdapters, sortedAdapters[sortedAdapters.length - 1] + 3]
}

const partOne = () => {
    let adapters = getInput();
    adapters = addOutlet(adapters);
    let sortedAdaptors = adapters.sort((a, b) => a - b);
    sortedAdaptors = addDeviceJoltage(sortedAdaptors);

    let oneCount = 0;
    let threeCount = 0;

    for (let i = 1; i < sortedAdaptors.length; i++) {
        if (sortedAdaptors[i] - sortedAdaptors[i - 1] === 1) {
            oneCount++;
        }
        else if (sortedAdaptors[i] - sortedAdaptors[i - 1] === 3) {
            threeCount++;
        }
    }

    return { oneCount, threeCount, answer: oneCount * threeCount };

}

//had to look this concept up
const tribonacci = (n) => {
    if (n < 2)
        return 0;
    if (n === 3)
        return 1;
    else
        return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

const partTwo = () => {
    let adapters = getInput();
    adapters = addOutlet(adapters);
    let sortedAdaptors = adapters.sort((a, b) => a - b);
    sortedAdaptors = addDeviceJoltage(sortedAdaptors);
    let oneCount = 0;
    let result = 1;

    for (let i = 1; i < sortedAdaptors.length; i++) {
        if (sortedAdaptors[i] - sortedAdaptors[i - 1] === 1) {
            oneCount++;
        }
        else if (sortedAdaptors[i] - sortedAdaptors[i - 1] === 3) {
            result *= tribonacci(oneCount + 3);
            oneCount = 0;
        }
    }

    return result;

}

console.log(partOne());
console.log(partTwo());
