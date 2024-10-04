const getAcceleration = (params) => {
    const { f, m, Δv, Δt, d, t } = params;
    if (f !== undefined && m !== undefined) {
        return f / m; 
    } 
    else if (Δv !== undefined && Δt !== undefined) {
        return Δv / Δt; 
    } 
    else if (d !== undefined && t !== undefined) {
        return (2 * d) / (t * t); 
    } 
    else {
        return 'impossible';
    }
};