function neuron(inputArray) {
    if (inputArray.length === 0) {
        return {};
    }

    const result = {};

    inputArray.forEach(item => {
        const [type, content] = item.split(' - ');
        const [category, query] = type.split(': ');
        const [, response] = content.split('Response: ');

        const key = query.toLowerCase().replace(/\s+/g, '_').replace(/[?!]/g, '');
        const categoryLower = category.toLowerCase();

        if (!result[categoryLower]) {
            result[categoryLower] = {};
        }

        if (!result[categoryLower][key]) {
            result[categoryLower][key] = {
                [getCategoryPropertyName(categoryLower)]: query,
                responses: []
            };
        }

        result[categoryLower][key].responses.push(response);
    });

    Object.keys(result).forEach(category => {
        if (Object.keys(result[category]).length === 0) {
            delete result[category];
        }
    });

    return result;
}

function getCategoryPropertyName(category) {
    switch (category) {
        case 'questions':
            return 'question';
        case 'orders':
            return 'order';
        default:
            return category.slice(0, -1);
    }
}
