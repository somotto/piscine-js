const round = (num) => {
    const intPart = trunc(num);
    const fraction = Math.abs(num - intPart);
    if (fraction < 0.5) return intPart;
    return num > 0 ? intPart + 1 : intPart - 1;
};
  
const floor = (num) => {
    const intPart = trunc(num);
    return num >= 0 || num === intPart ? intPart : intPart - 1;
};
  
const ceil = (num) => {
    const intPart = trunc(num);
    return num <= 0 || num === intPart ? intPart : intPart + 1;
};
  
const trunc = (num) => {
    return num < 0 ? -Math.floor(-num) : Math.floor(num);
};


