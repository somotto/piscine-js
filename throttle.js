function throttle(func, delay) {
    let lastCall = 0;

    const throttled = function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };

    return throttled;
}
function opThrottle(func, delay, options = {}) {
    let lastTime = 0;
    let timeout = null;
    let trailingArgs = null;
    let called = false;

    const { leading = true, trailing = true } = options;

    const throttled = function (...args) {
        const now = Date.now();

        if (leading && !called) {
            called = true;
            func.apply(this, args);
        } else {
            trailingArgs = args;
        }

        if (timeout) {
            clearTimeout(timeout);
        }

        if (trailing) {
            const remaining = delay - (now - lastTime);

            if (remaining <= 0) {

                func.apply(this, trailingArgs);
                lastTime = now;
                called = false;
            } else {
                timeout = setTimeout(() => {
                    func.apply(this, trailingArgs);
                    lastTime = now;
                    called = false;

                    trailingArgs = null;
                }, remaining);
            }
        }

        lastTime = now;
    };

    throttled.cancel = function () {
        clearTimeout(timeout);
        lastTime = 0;
        called = false;
        trailingArgs = null;
    };

    return throttled;
}