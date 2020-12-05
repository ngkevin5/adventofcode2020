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

const getBoardingPasses = () => {
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
    return results;
}

const partOne = () => {
    const boardingPasses = getBoardingPasses();
    return Math.max(...boardingPasses);
}

const partTwo = () => {
    const boardingPasses = getBoardingPasses();
    const sortedBoardingPasses = boardingPasses.sort(function (a, b) { return a - b });
    for (let i = 1; i < sortedBoardingPasses.length; i++) {
        if (sortedBoardingPasses[i] - sortedBoardingPasses[i - 1] !== 1) {
            console.log(`${sortedBoardingPasses[i - 1]} & ${sortedBoardingPasses[i]}. Your passport must be: ${sortedBoardingPasses[i] - 1}`)
            return sortedBoardingPasses[i] - 1;
        }
    }

    return -1;
}

console.log(partOne());
console.log(partTwo());
