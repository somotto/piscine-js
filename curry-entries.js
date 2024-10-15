const defaultCurry = (obj1) => (obj2) => {
    return { ...obj1, ...obj2 };
};

const mapCurry = (fn) => (obj) => {
    return Object.fromEntries(Object.entries(obj).map(fn));
};

const reduceCurry = (fn) => (obj, initialValue) => {
    return Object.entries(obj).reduce((acc, entry) => fn(acc, entry), initialValue);
};

const filterCurry = (fn) => (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(fn));
};

const reduceScore = (personnel) => {
    return reduceCurry((acc, [_, person]) => {
        if (person.isForceUser) {
            return acc + person.pilotingScore + person.shootingScore;
        }
        return acc;
    })(personnel, 0);
};

const filterForce = (personnel) => {
    return filterCurry(([_, person]) =>
        person.isForceUser && person.shootingScore >= 80
    )(personnel);
};

const mapAverage = (personnel) => {
    return mapCurry(([name, person]) => [
        name,
        {
            ...person,
            averageScore: (person.pilotingScore + person.shootingScore) / 2
        }
    ])(personnel);
};

export {
    defaultCurry,
    mapCurry,
    reduceCurry,
    filterCurry,
    reduceScore,
    filterForce,
    mapAverage,
};