function replica(target, ...sources) {
    const isPlainObject = (item) =>
        item && typeof item === 'object' && Object.getPrototypeOf(item) === Object.prototype;

    const deepCopy = (target, source) => {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                const value = source[key];
                if (isPlainObject(value)) {
                    target[key] = deepCopy({}, value);
                } else if (Array.isArray(value)) {
                    target[key] = value.map(item =>
                        isPlainObject(item) ? deepCopy({}, item) : copySpecialTypes(item)
                    );
                } else {
                    target[key] = copySpecialTypes(value);
                }
            }
        }
        return target;
    };

    const copySpecialTypes = (item) => {
        if (item instanceof RegExp) {
            return new RegExp(item);
        } else if (item instanceof Date) {
            return new Date(item);
        } else if (typeof item === 'function') {
            return item;
        } else if (item instanceof Map) {
            return new Map(item);
        } else if (item instanceof Set) {
            return new Set(item);
        } else if (ArrayBuffer.isView(item)) {
            return item.slice();
        } else if (item instanceof ArrayBuffer) {
            return item.slice(0);
        }
        return item;
    };

    sources.forEach(source => {
        deepCopy(target, source);
    });

    return target;
}
