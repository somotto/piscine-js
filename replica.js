function replica(target, ...sources) {
    const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item);
    const deepCopy = (target, source) => {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (isObject(source[key])) {
                    target[key] = deepCopy(Object.create(Object.getPrototypeOf(source[key])), source[key]);
                } else if (Array.isArray(source[key])) {
                    target[key] = source[key].map(item =>
                        isObject(item) ? deepCopy({}, item) : item
                    );
                } else {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };

    sources.forEach(source => {
        deepCopy(target, source);
    });

    return target;
}