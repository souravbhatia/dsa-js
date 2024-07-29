function isStringPalindrome (str, i) {
    if(i >= str.length) return true;
    if(str[i] != str[str.length - i - 1]) return false
    else return isStringPalindrome(str, i + 1);
}

console.log(isStringPalindrome("MADAM", 0));