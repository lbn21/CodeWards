function rgb(r, g, b) {
    const hex = (int) => {
        if (int < 0 || int === 0)
            return '00';
        if (int > 255 || int === 255)
            return 'FF';
        return `0${int.toString(16).toUpperCase()}`.slice(1);
    };
    return `${hex(r)}${hex(g)}${hex(b)}`;
}
console.log(rgb(0, 0, 0), '000000');
console.log(rgb(0, 0, -20), '000000');
console.log(rgb(300, 255, 255), 'FFFFFF');
console.log(rgb(173, 255, 47), 'ADFF2F');
