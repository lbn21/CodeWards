function firstNonRepeatingLetter(s) {
    const seen = {};
    for (let i = 0; i < s.length; i++) {
        const letter = s[i].toLowerCase();
        seen[letter] = seen[letter] || { count: 0, first: s[i] };
        seen[letter]['count']++;
    }
    for (const letter in seen) {
        const info = seen[letter];
        if (info['count'] === 1) {
            return info['first'];
        }
    }
    return '';
}
console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e');
console.log(firstNonRepeatingLetter('sTreSS'), 'T');
console.log(firstNonRepeatingLetter('abba'), '');
