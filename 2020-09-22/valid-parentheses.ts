/* function validParentheses(parens) {
  return Array.prototype.reduce.call(parens, (str, _) => str.replace(/\(\)/g, ''), parens).length === 0;
} */

function validParentheses(parens: string) {
    return Array.prototype.reduce.call(parens, (str, _) => str.replace(/\(\)/g, ''), parens).length === 0;
}

console.log(validParentheses('(())(())()()()(())()(())()()(()('), false);
console.log(validParentheses('()()()(('), false);
console.log(validParentheses('())'), false);
