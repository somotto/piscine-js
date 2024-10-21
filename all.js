function all(obj) {

    const keys = Object.keys(obj);

    if (keys.length === 0) {
        return Promise.resolve({});
    }

    const promises = keys.map(key => Promise.resolve(obj[key]));

    return new Promise((resolve, reject) => {
        let resolvedCount = 0;
        const result = {};

        promises.forEach((promise, index) => {
            promise.then(value => {
                result[keys[index]] = value;
                resolvedCount++;
                if (resolvedCount === keys.length) {
                    resolve(result);
                }
            }).catch(reject);
        });
    });
}
