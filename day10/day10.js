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
    let currentJoltage = 0;
    let differences = {};
    const pluggedIn = {};
    let deviceJoltage = getDeviceJoltage(adaptors);
    adaptors.push(deviceJoltage);

    while (adaptors.length > 0) {
        for (let i = 0; i < adaptors.length; i++) {
            const adaptor = adaptors[i]
            const difference = adaptor - currentJoltage;
            differences[adaptor] = difference;
        }

        let min = Number.MAX_VALUE;
        let minKey = 0;
        for (difference in differences) {
            if (differences[difference] < min) {
                min = differences[difference];
                minKey = difference;
            }
        }


        pluggedIn[minKey] = min;
        adaptors.splice(adaptors.indexOf(Number(minKey)), 1);

        currentJoltage = minKey;
        differences = {};
    }

    let oneCount = 0;
    let threeCount = 0;

    for (let i in pluggedIn) {
        if (pluggedIn[i] == 1) {
            oneCount++
        }

        if (pluggedIn[i] == 3) {
            threeCount++;
        }
    }
    return { oneCount, threeCount, answer: oneCount * threeCount };

}

console.log(partOne());