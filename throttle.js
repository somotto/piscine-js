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
    let timeout;
    let trailingCall;
    let lastArgs;
    let called = false;

    const { leading = true, trailing = true } = options;

    const throttled = function (...args) {
        const now = Date.now();

        if (leading && !called) {
            called = true;
            func.apply(this, args);
            lastTime = now;
        }

        if (timeout) {
            clearTimeout(timeout);
        }

        lastArgs = args;
        const remaining = delay - (now - lastTime);

        if (remaining <= 0) {

            if (trailing) {
                func.apply(this, lastArgs);
                lastTime = now;
                called = false;
            }
        } else if (trailing) {
            timeout = setTimeout(() => {
                if (lastArgs) {
                    func.apply(this, lastArgs);
                    lastTime = (leading ? 0 : Date.now());
                    called = false;
                }
            }, remaining);
        }
    };

    throttled.cancel = function () {
        clearTimeout(timeout);
        lastTime = 0;
        timeout = null;
        called = false;
    };

    return throttled;
}