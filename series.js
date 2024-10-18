async function series(asyncFunctions) {
    let results = [];
    for (let asyncFunc of asyncFunctions) {
        let result = await asyncFunc();
        results.push(result);
    }
    return results;
}