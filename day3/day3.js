const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day3input.txt').toString();
    let inputArray = input.split('\r\n');
    return inputArray.map((line) => {
        return line.trim();
    })
}

const partOne = () => {
    const input = getInput();
    let indexToCheck = 3;
    let trees = 0;
    for (let i = 1; i < input.length; i++) {
        while (indexToCheck > input[i].length) {
            input[i] = input[i] + input[i];
        }

        if (input[i][indexToCheck] === '#') {
            trees++;
        }
        indexToCheck += 3;
    }
    return trees;
}

const partTwo = () => {
    const input = getInput();
    let result = 1;
    const metaData = {
        "right1Down1": {
            indexChange: 1,
            rowChange: 1,
            currentIndex: 1,
            treeCount: 0,
        },
        "right3Down1": {
            indexChange: 3,
            rowChange: 1,
            currentIndex: 3,
            treeCount: 0,
        },
        "right5Down1": {
            indexChange: 5,
            rowChange: 1,
            currentIndex: 5,
            treeCount: 0,
        },
        "right7Down1": {
            indexChange: 7,
            rowChange: 1,
            currentIndex: 7,
            treeCount: 0,
        },
        "right1Down2": {
            indexChange: 1,
            rowChange: 2,
            currentIndex: 1,
            treeCount: 0,
        },

    }

    for (let i = 1; i < input.length; i++) {
        for (const key in metaData) {

            if (i % metaData[key].rowChange === 0) {

                if (metaData[key].currentIndex >= input[i].length) {
                    metaData[key].currentIndex -= input[i].length;
                }

                /*
                this didn't work for right1Down1. Why?

                while (metaData[key].currentIndex > input[i].length) {
                    input[i] = input[i] + input[i];
                }
                */

                if (input[i][metaData[key].currentIndex] === '#') {
                    metaData[key].treeCount++;
                }
                metaData[key].currentIndex += metaData[key].indexChange;
            }
        }
    }

    for (const key in metaData) {
        result = result * metaData[key].treeCount;
    }

    console.log(metaData);
    return result;
}


console.log(partOne());
console.log(partTwo());
