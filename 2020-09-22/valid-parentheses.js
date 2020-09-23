function validParentheses(parens) {
    while (parens.match(/\(\)/g)) {
        parens = parens.replace(/\(\)/g, '');
    }
    return parens.length === 0;
}
console.log(validParentheses('(())(())()()()(())()(())()()(()('), false);
console.log(validParentheses('()()()(('), false);
console.log(validParentheses('())'), false);
console.log(validParentheses('()(())()()()(())()()()()()()((()))()()'), true);
