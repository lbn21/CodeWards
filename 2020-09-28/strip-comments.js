function solution(input, markers) {
    const parts = input.split('\n');
    const clean = '';
    const regexParts = markers.map((marker) => `\\${marker}`);
    const regEx = new RegExp(`(${regexParts.join('|')}).*`, 'g');
    const cleanArr = parts.map((part) => {
        return part.replace(regEx, '').trim();
    });
    return cleanArr.join('\n');
}
console.log(solution('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!']), 'apples, plums\npears\noranges');
console.log(solution('Q @b\nu\ne -e f g', ['@', '-']), 'Q\nu\ne');
console.log(solution('a #b\nc\nd $e f g', ['#', '$']), 'a\nc\nd');
