const getAcceleration = (params) => {
    const { f, m, Δv, Δt, t, d } = params;

    if (typeof f === 'undefined' || typeof m === 'undefined' || 
    typeof Δv === 'undefined' || typeof Δt === 'undefined' || 
    typeof t === 'undefined' || typeof d === 'undefined') {
    return "impossible";
}

    const accelerations = [];

    if (m !== 0) {
        const a1 = f / m;
        accelerations.push(a1);
    }

    if (Δt !== 0) {
        const a2 = Δv / Δt;
        accelerations.push(a2);
    }

    if (t !== 0) {
        const a3 = (2 * d) / (t * t);
        accelerations.push(a3);
    }

    return accelerations.length === 0 ? "impossible" : accelerations;
};