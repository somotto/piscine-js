const filterEntries = (obj, predicate) => {
    return Object.fromEntries(
        Object.entries(obj).filter(entry => predicate(entry))
    );
};

const mapEntries = (obj, mapper) => {
    return Object.fromEntries(
        Object.entries(obj).map(entry => mapper(entry))
    );
};

const reduceEntries = (obj, reducer, initialValue) => {
    return Object.entries(obj).reduce(
        (acc, entry) => reducer(acc, entry),
        initialValue
    );
};

const totalCalories = (cart) => {
    return parseFloat(
        reduceEntries(
            cart,
            (total, [item, grams]) => {
                return total + (nutritionDB[item].calories * grams) / 100;
            },
            0
        ).toFixed(1)
    );
};

const lowCarbs = (cart) => {
    return filterEntries(
        cart,
        ([item, grams]) => (nutritionDB[item].carbs * grams) / 100 < 50
    );
};

const roundTo = (value, decimals) => {
    if (value === undefined || value === null) return value;
    return parseFloat(value.toFixed(decimals));
};

const cartTotal = (cart) => {
    return mapEntries(cart, ([item, grams]) => {
        const itemNutrition = nutritionDB[item];
        const scaledNutrition = Object.fromEntries(
            Object.entries(itemNutrition).map(([nutrient, value]) => [
                nutrient,
                roundTo((value * grams) / 100, 3),
            ])
        );
        return [item, scaledNutrition];
    });
};

