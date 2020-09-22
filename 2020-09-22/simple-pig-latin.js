function pigIt(str){
    return str.replace(/\b(\w{1})(\w*\b)/gi, '$2$1ay');
}

console.log(pigIt('Pig latin is cool') =='igPay atinlay siay oolcay')
console.log(pigIt('This is my string') == 'hisTay siay ymay tringsay')