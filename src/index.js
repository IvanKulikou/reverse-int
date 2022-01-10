module.exports = function reverse(n) {
    let newString = "";
    let str = Math.abs(n).toString();
    console.log(str);
    for (let i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }
    console.log(newString);
    return newString;
};
