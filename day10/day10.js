const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day10input.txt').toString();
    let inputArray = input.split('\r\n');
    return inputArray.map((number) => {
        return Number(number);
    })
}

const addOutlet = (adaptors) => {
    return [...adaptors, 0]
}

const addDeviceJoltage = (sortedAdaptors) => {
    return [...sortedAdaptors, sortedAdaptors[sortedAdaptors.length - 1] + 3]
}

const partOne = () => {
    let adaptors = getInput();
    adaptors = addOutlet(adaptors);
    let sortedAdaptors = adaptors.sort((a, b) => a - b);
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

const partTwo = () => {
    return null;
}

console.log(partOne());
console.log(partTwo());
