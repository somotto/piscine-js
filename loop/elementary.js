const multiply = (a, b) => {
    let result = 0;
    const absA = Math.abs(a);
    const absB = Math.abs(b);
    
    for (let i = 0; i < absB; i++) {
      result += absA;
    }
    
    return (a < 0) !== (b < 0) ? -result : result;
};
const divide = (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    
    let quotient = 0;
    let absA = Math.abs(a);
    const absB = Math.abs(b);
    
    while (absA >= absB) {
      absA -= absB;
      quotient++;
    }
    
    return (a < 0) !== (b < 0) ? -quotient : quotient;
};

const modulo = (a, b) => {
    if (b === 0) {
      throw new Error("Modulo by zero");
    }
    
    const absA = Math.abs(a);
    const absB = Math.abs(b);
    let result = absA;
    
    while (result >= absB) {
      result -= absB;
    }
    
    return a < 0 ? -result : result;
};
