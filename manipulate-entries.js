const filterEntries = (entries, predicate) => {
    return entries.filter(predicate);
};

const mapEntries = (entries, mapper) => {
    return entries.map(mapper);
};

const reduceEntries = (entries, reducer, initialValue) => {
    return entries.reduce(reducer, initialValue);
};

const totalCalories = (cart) => {
    const entries = Object.entries(cart);
    return reduceEntries(
        entries,
        (total, [item, grams]) => {
            return total + (nutritionDB[item].calories * grams) / 100;
        },
        0
    );
};

const lowCarbs = (cart) => {
    const entries = Object.entries(cart);
    const lowCarbEntries = filterEntries(
        entries,
        ([item, grams]) => (nutritionDB[item].carbs * grams) / 100 < 50
    );
    return Object.fromEntries(lowCarbEntries);
};

const cartTotal = (cart) => {
    const entries = Object.entries(cart);
    const totalEntries = mapEntries(entries, ([item, grams]) => {
        const itemNutrition = nutritionDB[item];
        const scaledNutrition = Object.fromEntries(
            Object.entries(itemNutrition).map(([nutrient, value]) => [
                nutrient,
                (value * grams) / 100,
            ])
        );
        return [item, scaledNutrition];
    });
    return Object.fromEntries(totalEntries);
};
