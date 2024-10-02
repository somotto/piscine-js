const arrToSet = arr => new Set(arr);

const arrToStr = arr => arr.join('');

const setToArr = set => Array.from(set);

const setToStr = set => Array.from(set).join('');

const strToArr = str => Array.from(str);

const strToSet = str => new Set(str);

const mapToObj = map => Object.fromEntries(map);

const objToArr = obj => Object.values(obj);

const objToMap = obj => new Map(Object.entries(obj));

const arrToObj = arr => arr.reduce((acc, cur, idx) => {
    acc[idx] = cur;
    return acc;
}, {});

const strToObj = str => Array.from(str).reduce((acc, cur, idx) => {
    acc[idx] = cur;
    return acc;
}, {});

const superTypeOf = value => {
   if (value === null) {
    return "null"
   }
   if (value === undefined) {
    return "undefined"
   }

   const obj = Object.prototype.toString.call(value)
   return obj.slice(8, -1)
};