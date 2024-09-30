const escapeStr = "` \\ / \"'"
const arr = [4, '2']
const obj = {
    str: 'Hello',
    num: 20,
    bool: true,
    undef: undefined,
}
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: 'world',
        num: 10,
        bool: true
    }
}
Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested.arr)
Object.freeze(nested.obj)

console.log(arr)
console.log(obj)
console.log(nested)
console.log(escapeStr)


