const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day7input.txt').toString();
    let bagInfoList = input.split('\r\n');
    let bagPattern = /(\d )*\w+ \w+ bags*/g;
    return bagInfoList.map((bagInfo) => {
        return bagInfo.match(bagPattern);
    })
}

const organizeBags = (bags) => {
    let bagObject = {};
    bags.forEach((bag) => {
        let bagParentName = bag[0].replace('bags', '').trim();
        bagObject[bagParentName] = {};
        for (let i = 1; i < bag.length; i++) {
            let amount = Number(bag[i].substring(0, 1));
            let bagName = bag[i].substring(2).replace('bags', '').replace('bag', '').trim();
            if (bagName !== 'other') {
                bagObject[bagParentName][bagName] = amount;
            }
        }
    });
    return bagObject;
}

const hasShinyBag = (bags, bagName) => {
    for (let childBag in bags[bagName]) {
        if (childBag === 'shiny gold') {
            return true;
        }

        if (hasShinyBag(bags, childBag)) {
            return true;
        }
    }
    return false;
}

const partOne = () => {
    const input = getInput();
    const bags = organizeBags(input);
    let count = 0;
    for (let bag in bags) {
        if (hasShinyBag(bags, bag)) {
            count++;
        }
    }

    return count;
}


const checkBag = (bags, bagName, multiplier, accumulator) => {
    accumulator.push(multiplier);
    if (Object.keys(bags[bagName]).length < 1) {
        return 1;
    }

    for (childBag in bags[bagName]) {
        checkBag(bags, childBag, multiplier * bags[bagName][childBag], accumulator);
    }
}

const partTwo = () => {
    const input = getInput();
    const bags = organizeBags(input);
    let accumulator = [];
    let count = 0;
    let requirements = bags['shiny gold'];
    for (let bag in requirements) {
        count = checkBag(bags, bag, requirements[bag], accumulator);
    }

    return accumulator.reduce((sum, currentValue) => {
        return sum += currentValue
    });
}

console.log(partOne());
console.log(partTwo());