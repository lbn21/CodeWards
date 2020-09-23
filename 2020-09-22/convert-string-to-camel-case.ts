function toCamelCase(str) {
    return str.replace(/[-_]./gi, (match) => match[1].toUpperCase());
}

console.log(toCamelCase(''), '');
console.log(toCamelCase('The-Stealth-Warrior'), 'TheStealthWarrior');
console.log(toCamelCase('the_stealth_warrior'), 'theStealthWarrior');
console.log(toCamelCase('A-B-C'), 'ABC');
