/* function validParentheses(parens) {
  return Array.prototype.reduce.call(parens, (str, _) => str.replace(/\(\)/g, ''), parens).length === 0;
  (\((?=\(\){1})*)
} */

function validParentheses(parens: string) {
    while (parens.match(/\(\)/g)) {
        parens = parens.replace(/\(\)/g, '');
    }
    return parens.length === 0;
}

console.log(validParentheses('(())(())()()()(())()(())()()(()('), false);
console.log(validParentheses('()()()(('), false);
console.log(validParentheses('())'), false);
console.log(validParentheses('()(())()()()(())()()()()()()((()))()()'), true);
