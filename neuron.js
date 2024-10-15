function neuron(inputArray) {
    const result = {
        questions: {},
        orders: {}
    };

    inputArray.forEach(item => {
        const [type, content] = item.split(' - ');
        const [category, query] = type.split(': ');
        const [, response] = content.split('Response: ');

        const key = query.toLowerCase().replace(/\s+/g, '_').replace(/[?!]/g, '');
        const categoryLower = category.toLowerCase();

        if (!result[categoryLower][key]) {
            result[categoryLower][key] = {
                [categoryLower === 'questions' ? 'question' : 'order']: query,
                responses: []
            };
        }

        result[categoryLower][key].responses.push(response);
    });

    return result;
}

