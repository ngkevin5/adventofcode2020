const getInput = () => {
    fs = require('fs');
    let input = fs.readFileSync('day2input.txt').toString();
    let inputArray = input.split('\r\n');
    return inputArray.map((passwordInfo) => {
        let entryArray = passwordInfo.split(':');
        let requirements = entryArray[0].split(' ');
        let password = entryArray[1];
        let limits = requirements[0].split('-');
        limits = limits.map((l) => Number(l));
        return {
            password: password.trim(),
            requiredCharacter: requirements[1].trim(),
            lowerLimit: limits[0],
            upperLimit: limits[1],
        }
    })
}

const isValidPassword = (passwordInfo) => {
    const { password, requiredCharacter, lowerLimit, upperLimit } = passwordInfo
    let characterCount = 0;
    for (let i = 0; i < password.length; i++) {
        if (password[i] === requiredCharacter) {
            characterCount++;
        }
    }

    if (characterCount < lowerLimit || characterCount > upperLimit) {
        return false;
    }

    return true;
}

const part1 = () => {
    const passwordList = getInput();
    let validCount = 0;
    for (let i = 0; i < passwordList.length; i++) {
        if (isValidPassword(passwordList[i])) {
            validCount++;
        }
    }
    return validCount;
}

console.log(part1());
