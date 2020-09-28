function parseInt(string) {
    let sum = 0;
    const lookup = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
        hundred: 100,
        thousand: 1000,
        million: 1000000,
    };
    string = string.replace(/\s{1}and\s{1}/g, ' ');
    const parts = {
        million: undefined,
        thousand: undefined,
        hundred: undefined,
        one: undefined,
    };
    if (string.indexOf('million') > -1) {
        parts.million = string.split('million')[0].trim();
        string = string.split('million')[1].trim();
    }
    if (string.indexOf('thousand') > -1) {
        parts.thousand = string.split('thousand')[0].trim();
        string = string.split('thousand')[1].trim();
    }
    if (string.indexOf('hundred') > -1) {
        parts.hundred = string.split('hundred')[0].trim();
        string = string.split('hundred')[1].trim();
    }
    parts.one = string;
    const convertWithHyphen = (withHyphen) => {
        const withHyphenArray = withHyphen.split('-');
        const left = withHyphenArray[0];
        const right = withHyphenArray[1];
        return lookup[left] + lookup[right];
    };
    const convertToInt = (numberAsString, multiplier) => {
        let number = 0;
        const numbersArray = numberAsString.split(' ');
        if (numbersArray.length === 3) {
            const hundreds = lookup[numbersArray[0]];
            const hundred = lookup[numbersArray[1]];
            const tens = numbersArray[2].indexOf('-') > -1 ? convertWithHyphen(numbersArray[2]) : lookup[numbersArray[2]];
            number = hundreds * hundred + tens;
        }
        else if (numbersArray.length === 2) {
            const hundreds = lookup[numbersArray[0]];
            const hundred = lookup[numbersArray[1]];
            number = hundreds * hundred;
        }
        else {
            number = numbersArray[0].indexOf('-') > -1 ? convertWithHyphen(numbersArray[0]) : lookup[numbersArray[0]];
        }
        return number * multiplier;
    };
    for (const multiplier in parts) {
        const stringValue = parts[multiplier];
        if (stringValue) {
            sum += convertToInt(stringValue, lookup[multiplier]);
        }
    }
    return sum;
}
console.log(parseInt('two hundred and fifty-two thousand five hundred and forty-four'), 252544);
console.log(parseInt('zero'), 0);
console.log(parseInt('one'), 1);
console.log(parseInt('twenty'), 20);
console.log(parseInt('two hundred forty-six'), 246);
console.log(parseInt('seven hundred eighty-three thousand nine hundred and nineteen'), 783919);
console.log(parseInt('seven hundred eighty-three thousand and nineteen'), 783019);
console.log(parseInt('one million five hundred thousand six hundred and twenty-one'), 1500621);
