const reverse = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr = `${str[i]}${newStr}`
    };
    return newStr;
};

const uppercase = (str) => {
    return str.toUpperCase();
};

const noVowels = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u') {
            newStr = `${newStr}${str[i]}`;
        }
    }
    return newStr;
};

module.exports = {
    reverse,
    uppercase,
    noVowels
}