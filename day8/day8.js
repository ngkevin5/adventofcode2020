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


const runInstructions = (instructions) => {
    let seenInstruction = {};
    let accumulator = 0;

    let i = 0;
    while (i < instructions.length) {
        if (seenInstruction[i]) {
            return { accumulator, status: 'loop' };
        }
        seenInstruction[i] = true;
        const { operator, operand, instruction } = instructions[i];
        switch (instruction.toLowerCase()) {
            case 'acc':
                accumulator = performOperation[operator](accumulator, operand);
                i++;
                break;
            case 'jmp':
                i = performOperation[operator](i, operand);
                break;
            default:
                i++;
                break;
        }
    }

    return { accumulator, status: 'complete' };
}

const partOne = () => {
    const instructions = getInput();
    return runInstructions(instructions).accumulator;
};

const swap = (type) => {
    if (type === 'nop') {
        return 'jmp';
    }
    else {
        return 'nop';
    }
}

const partTwo = () => {
    const instructions = getInput();
    let j = 0;


    for (j = 0; j < instructions.length; j++) {
        if (instructions[j].instruction === 'nop' || instructions[j].instruction === 'jmp') {
            let newInstructions = instructions.map(a => Object.assign({}, a));
            newInstructions[j].instruction = swap(newInstructions[j].instruction)
            const results = runInstructions(newInstructions);
            if (results.status === 'complete') {
                return results.accumulator;
            }
        }
    }

};

console.log(partOne());
console.log(partTwo());
