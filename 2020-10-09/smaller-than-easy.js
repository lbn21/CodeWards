function smaller(nums) {
    const length = nums.length;
    const final = [0];
    let prev = nums[length - 1];
    const cache = {};
    cache[prev] = 0;
    for (let i = length - 2; i >= 0; i--) {
        const current = nums[i];
        if (current === prev) {
            final.unshift(cache[prev]);
            continue;
        }
        if (current > prev) {
            cache[current] = (cache[current] || cache[prev]) + 1;
            final.unshift(cache[current]);
            prev = current;
            continue;
        }
        if (current < prev && !cache[current]) {
            cache[current] = 0 + i;
            final.unshift(0 + i);
            prev = current;
            continue;
        }
    }
    return final;
}
console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);
console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);
