const escapeStr = "` \\ / \" \'";
const arr = [4, '2'];
const obj = {
    str: 'Hello',
    num: 20,
    bool: true,
    undef: undefined,
};
Object.freeze(arr);
Object.freeze(obj);
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: 'world',
        num: 10,
        bool: true
    }
};
Object.freeze(nested.arr)
Object.freeze(nested.obj)



