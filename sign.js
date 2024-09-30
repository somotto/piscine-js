function sign(num) {
    if (num > 0) {
        return 1; 
    } else if (num < 0) {
        return -1; 
    } else {
        return 0;  
    }
}

function sameSign(a, b) {
    return sign(a) === sign(b) && a !== 0 && b !== 0;
}