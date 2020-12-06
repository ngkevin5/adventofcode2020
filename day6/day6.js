const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day6input.txt').toString();
    let groups = input.split('\r\n\r\n');
    return groups.map((group) => {
        return group.replace(/\r\n/g, '');
    })
}

const getInput2 = () => {
    fs = require('fs');
    let input = fs.readFileSync('day6input.txt').toString();
    let groups = input.split('\r\n\r\n');
    return groups.map((group) => {
        let count = 1;
        let newGroup = group.replace(/\r\n/g, () => {
            count++;
            return '';
        });
        return { answers: newGroup, numOfPeople: count }
    })
}

const partOne = () => {
    const groups = getInput();
    let sum = 0;

    groups.forEach((group) => {
        let lettersSeen = {};
        for (let i = 0; i < group.length; i++) {
            lettersSeen[group[i]] = true;
        }

        sum += Object.keys(lettersSeen).length;
    })

    return sum;
};

const partTwo = () => {
    const groups = getInput2();
    let sum = 0;
    groups.forEach((group) => {
        let lettersSeen = {};
        for (let i = 0; i < group.answers.length; i++) {
            const currentAnswer = group.answers[i];
            if (!lettersSeen[currentAnswer]) {
                lettersSeen[currentAnswer] = 0;
            }

            lettersSeen[currentAnswer]++;
        }

        for (letter in lettersSeen) {
            if (lettersSeen[letter] === group.numOfPeople) {
                sum++
            }
        }
    })

    return sum;
};

console.log(partOne());
console.log(partTwo());
