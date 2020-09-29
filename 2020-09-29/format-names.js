const list = (names) => {
    return names.reduce();
};
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]), 'Bart, Lisa, Maggie, Homer & Marge');
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]), 'Bart, Lisa & Maggie');
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa');
console.log(list([{ name: 'Bart' }]), 'Bart');
console.log(list([]), '');
