function containsOperator(string) {
    return (getOperator(string) != ' ');
}
function getOperator(string) {
    for(let i = 1; i < string.length; i++) {
        let currentChar = string.charAt(i);
        if((currentChar == '+' || currentChar == '-' || currentChar == '×' || currentChar == '÷') &&
                string.charAt(i - 1) != 'E') {
            return currentChar;
        }
    }
    return ' ';
}
function operatorIndex(string) {
    for(let i = 1; i < string.length; i++) {
        let currentChar = string.charAt(i);
        if((currentChar == '+' || currentChar == '-' || currentChar == '×' || currentChar == '÷'|| currentChar == '=')
                && string.charAt(i - 1) != 'e') {
            return i;
        }
    }
    throw new ArrayIndexOutOfBoundsException("STRING DOESN'T CONTAIN OPERATOR");
}
function checkLong(number) {
    return number % 1 == 0 && !parseFloat.toString(number).includes('e');
}
