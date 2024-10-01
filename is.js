is.num = function(value) {
    return typeof value === 'number';
};

is.nan = (value) => Number.isNaN(value);

is.str = function(value) {
    return typeof value === 'string';
};

is.bool = function(value) {
    return typeof value === 'boolean';
};
is.undef = function(value) {
    return typeof value === 'undefined';
};

is.def = function(value) {
    return typeof value !== 'undefined';
};

is.arr = function(value) {
    return Array.isArray(value);
};

is.obj = function(value) {
    return typeof value === 'object';
};

is.fun = function(value) {
    return typeof value === 'function';
};

is.truthy = function(value) {
    return !!value;
};

is.falsy = function(value) {
    return !value;
};


