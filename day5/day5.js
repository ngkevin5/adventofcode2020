const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day5input.txt').toString();
    let inputArray = input.split('\r\n');
    return inputArray.map((line) => {
        return line.trim();
    })
}

const getRowOrColumn = (currentSeat, instructions) => {
    for (let i = 0; i < instructions.length; i++) {
        let currentInstruction = instructions[i];

        if (currentInstruction.toUpperCase() === 'F' || currentInstruction.toUpperCase() === 'L') {
            currentSeat =
                currentSeat.slice(0, Math.floor(currentSeat.length / 2))
        }

        if (currentInstruction.toUpperCase() === 'B' || currentInstruction.toUpperCase() === 'R') {
            currentSeat =
                currentSeat.slice(Math.ceil(currentSeat.length / 2), currentSeat[currentSeat.length]);
        }


        if (currentSeat.length === 1) {
            return currentSeat[0];
        }
    }
}

const generatePlaneSeats = (type) => {
    let seats = [];

    let maxAmount = 0;
    switch (type.toLowerCase()) {
        case 'rows': maxAmount = 128; break;
        case 'columns': maxAmount = 8; break;
        default: maxAmount = 128;
    }

    for (let i = 0; i < maxAmount; i++) {
        seats[i] = i;
    }

    return seats;
}

const partOne = () => {
    const input = getInput();
    let seatRows = generatePlaneSeats("rows");
    let seatColumns = generatePlaneSeats("columns");
    const results = [];

    input.forEach(instruction => {
        let rowInstructions = instruction.substring(0, 7);
        let columnInstructions = instruction.substring(7, 10);
        let row = getRowOrColumn(seatRows, rowInstructions);
        let column = getRowOrColumn(seatColumns, columnInstructions);
        results.push((row * 8) + column);
    });

    return Math.max(...results);
}

console.log(partOne());