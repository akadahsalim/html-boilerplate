function diagonalOfSquare(side) {
    return Math.sqrt(2) * side;
}

function triangleArea(a, b, c) {
    const perimeter = a + b + c;
    return Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
}

function circleCircumference(radius) {
    return 2 * Math.PI * radius
}

function circleArea(r) {
    return Math.PI * Math.pow(r, 2);
}