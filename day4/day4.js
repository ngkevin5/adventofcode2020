const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day4input.txt').toString();
    let inputArray = input.split('\r\n\r\n');
    return inputArray.map((line) => {
        const properties = line.replace(/\r\n/g, ' ').split(' ');
        const propertiesObject = {};
        properties.forEach((p) => {
            const propertyPair = p.split(':');
            propertiesObject[propertyPair[0].trim()] = propertyPair[1].trim();
        });

        return propertiesObject;
    })
}

const partOne = () => {
    let numOfValid = 0;
    const input = getInput();

    input.forEach((passportData) => {
        const requiredData = {
            byr: false,
            iyr: false,
            eyr: false,
            hgt: false,
            hcl: false,
            ecl: false,
            pid: false,
            cid: false,
        }
        for (key in passportData) {
            requiredData[key] = true;
        }

        if (
            requiredData.byr &&
            requiredData.iyr &&
            requiredData.eyr &&
            requiredData.hgt &&
            requiredData.hcl &&
            requiredData.ecl &&
            requiredData.pid) {
            numOfValid++
        }
    })
    return numOfValid;
}

const partTwo = () => {
    let numOfValid = 0;
    const input = getInput();

    input.forEach((passportData) => {
        const requiredData = {
            byr: { valid: false, pattern: /^(19)[2-9]\d{1}$|^(20)[0][0-2]$/ },
            iyr: { valid: false, pattern: /^(201)[0-9]$|^(202)0$/ },
            eyr: { valid: false, pattern: /^(202)[0-9]$|^2030$/ },
            hgt: { valid: false, pattern: /^1[5-8][0-9]cm$|^19[0-3]cm$|^[5-6]\din$|^7[0-6]in$/ },
            hcl: { valid: false, pattern: /^#(\d|[a-f]){6}$/ },
            ecl: { valid: false, pattern: /^(amb|blu|brn|gry|grn|hzl|oth)$/ },
            pid: { valid: false, pattern: /^\d{9}$/ }
            //cid: { valid: true, pattern: /lol/ },
        }
        for (key in passportData) {
            if (requiredData[key]) {
                requiredData[key].valid =
                    requiredData[key].pattern.test(passportData[key]);
            }

        }

        if (
            requiredData.byr.valid &&
            requiredData.iyr.valid &&
            requiredData.eyr.valid &&
            requiredData.hgt.valid &&
            requiredData.hcl.valid &&
            requiredData.ecl.valid &&
            requiredData.pid.valid) {
            numOfValid++
        }
    })
    return numOfValid;
}

console.log(partOne());
console.log(partTwo());
