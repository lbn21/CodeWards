const solution = (list, part = []) => {
    return list
        .reduce((result, current) => {
            if ((part[part.length - 1] || 0) + 1 !== current) {
                part = [];
                result.push(part);
            }
            part.push(current);
            return result;
        }, [])
        .map((part) => (part.length >= 3 ? `${part.shift()}-${part.pop()}` : `${part}`))
        .join(',');
};

console.log(
    solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]) ===
        '-6,-3-1,3-5,7-11,14,15,17-20',
);
