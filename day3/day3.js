const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day3input.txt').toString();
    let inputArray = input.split('\r\n');
    return inputArray.map((line) => {
        return line;
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
    const metaData = {
        "right1Down1": {
            indexChange: 1,
            currentIndex: 1,
            treeCount: 0,
        },
        "right3Down1": {
            indexChange: 3,
            currentIndex: 3,
            treeCount: 0,
        },
        "right5Down1": {
            indexChange: 5,
            currentIndex: 5,
            treeCount: 0,
        },
        "right7Down1": {
            indexChange: 7,
            currentIndex: 7,
            treeCount: 0,
        },
        "right1Down2": {
            indexChange: 1,
            currentIndex: 1,
            treeCount: 0,
        },

    }

    for (let i = 1; i < input.length; i++) {
        while (metaData.right3Down1.currentIndex > input[i].length) {
            input[i] = input[i] + input[i];
        }

        if (input[i][metaData.right3Down1.currentIndex] === '#') {
            metaData.right3Down1.treeCount++;
        }
        metaData.right3Down1.currentIndex += metaData.right3Down1.indexChange;
    }
    return metaData.right3Down1.treeCount;
}


console.log(partOne());
console.log(partTwo());
