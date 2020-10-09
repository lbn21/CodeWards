const list = (names) => {
    return names.reduce((names, { name }, i, arr) => {
        if (i === 0) {
            return name;
        }
        else if (i === arr.length - 1) {
            return names + ` & ${name}`;
        }
        else {
            return names + `, ${name}`;
        }
    }, '');
};
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]), 'Bart, Lisa, Maggie, Homer & Marge');
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]), 'Bart, Lisa & Maggie');
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa');
console.log(list([{ name: 'Bart' }]), 'Bart');
console.log(list([]), '');
