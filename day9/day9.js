const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day9input.txt').toString();
    let inputArray = input.split('\r\n');
    return inputArray.map((number) => {
        return Number(number);
    })
}

const partOne = () => {
    const input = getInput();
    const preambleLength = 5;
    const validSums = {};

    for(let i = 0; i < preambleLength; i++) {
        for(let j = i + 1; j < preambleLength; j++) {
            console.log(input[i], input[j], input[i] + input[j])
            validSums[input[i] + input[j]] = true;
        }
    }

    console.log(validSums);

    for(let i = preambleLength; i < input.length; i++) {
        if(!validSums[input[i]]){
            return input[i];
        }
    }

    
}

console.log(partOne());