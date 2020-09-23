function generateHashtag(str) {
    if (!str)
        return false;
    const clean = str.replace(/(\s*)\b(\w{1})/g, (_, p1, p2) => p2.toUpperCase());
    return clean.length >= 140 ? false : `#${clean}`;
}
console.log(generateHashtag('Do We have A Hashtag'), '#DoWeHaveAHashtag');
console.log(generateHashtag('Codewars'), '#Codewars');
console.log(generateHashtag('Codewars Is Nice'), '#CodewarsIsNice');
console.log(generateHashtag('Codewars is nice'), '#CodewarsIsNice');
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'), '#CodeWars');
console.log(generateHashtag('a'.repeat(139)), '#A' + 'a'.repeat(138));
console.log(generateHashtag('a'.repeat(140)), false);
