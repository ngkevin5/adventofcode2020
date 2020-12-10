const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day10input.txt').toString();
    let inputArray = input.split('\r\n');
    return inputArray.map((number) => {
        return Number(number);
    })
}

const getDeviceJoltage = (adaptors) => {
    return Math.max(...adaptors) + 3;
}

const partOne = () => {
    const adaptors = getInput();
    const deviceJoltage = getDeviceJoltage(adaptors);

    for(let i = 0; i < adaptors.length; i++) {
        if(adaptors[i] 
    }
}

console.log(partOne());