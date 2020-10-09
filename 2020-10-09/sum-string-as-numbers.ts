const sumStrings = (a, b, result = '', carry = 0) => {
    if (a.length < b.length) {
        a = a.padStart(b.length, '0');
    }
    if (b.length < a.length) {
        b = b.padStart(a.length, '0');
    }
    for (let i = a.length - 1; i >= 0; i--) {
        const added = +a[i] + +b[i] + carry;
        carry = 0;
        if (added > 9) {
            carry = 1;
            result = (added % 10) + result;
        } else {
            result = added + result;
        }
    }
    return (carry > 0 ? carry + result : result).replace(/^0*/, '');
};

console.log(sumStrings('1234', '456'), '1690');
console.log(sumStrings('800', '9567'), '10367');
console.log(sumStrings('99', '1'), '100');
console.log(sumStrings('00103', '08567'), '8670');
