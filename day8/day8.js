const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day8input.txt').toString();
    let inputArray = input.split('\r\n');
    return inputArray.map((instruction) => {
        const instructionArray = instruction.split(' ');
        return {
            instruction: instructionArray[0],
            operator: instructionArray[1].substring(0, 1),
            operand: Number(instructionArray[1].substring(1)),
        }
    })
}

var performOperation = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y }
};

const partOne = () => {
    const instructions = getInput();
    let seenInstruction = {};
    let accumulator = 0;

    let i = 0;
    while (i < instructions.length) {
        if (seenInstruction[i]) {
            break;
        }
        seenInstruction[i] = true;
        const { operator, operand, instruction } = instructions[i];
        switch (instruction.toLowerCase()) {
            case 'acc':
                console.log(`doing ${accumulator} ${operator} ${operand}`)
                accumulator = performOperation[operator](accumulator, operand);
                i++;
                break;
            case 'jmp':
                console.log(`jumping ${i} ${operator} ${operand}`)
                i = performOperation[operator](i, operand);
                break;
            default:
                console.log('do nothing');
                i++;
                break;
        }
    }

    return accumulator;
};

console.log(partOne());
