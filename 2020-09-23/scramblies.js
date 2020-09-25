function scramble(str1, str2) {
    const seen = {};
    for (let i = 0; i < str2.length; i++) {
        const letter = str2[i];
        seen[letter] = seen[letter] || 0;
        seen[letter]++;
        if (str1.indexOf(letter) === -1) {
            return false;
        }
    }
    for (const letter in seen) {
        const count = seen[letter];
        const regEx = new RegExp(`${letter}`, 'g');
        const match = str1.match(regEx);
        if (match.length < count) {
            return false;
        }
    }
    return true;
}
console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjava', 'javascript'), true);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);
console.log(scramble('scriptjavx', 'javascript'), false);
