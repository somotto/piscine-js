function sign(number) {
    if (number === 0) {
        return 0
    } else if (number > 0) {
    return 1
   } else {
    return -1
   }
}

function sameSign(a, b) {
    return sign(a) === sign(b) && a !== 0 && b !== 0;
}