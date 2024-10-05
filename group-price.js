const groupPrice = (input) => {
    const regex = /(\$[0-9]+(?:\.[0-9]{2})?)/g; // Matches currency format e.g., $4.00
    const result = [];
    let match;

    while ((match = regex.exec(input)) !== null) {
        const fullPrice = match[0];
        const integerPart = fullPrice.replace(/[^0-9]/g, ''); // Extract number part without currency symbol
        const fractionalPart = fullPrice.includes('.') ? fullPrice.split('.')[1] : '00'; // Get fraction or default to '00'

        result.push([fullPrice, integerPart, fractionalPart]);
    }

    return result;
};

// // Example usage
// console.log(groupPrice('The price of the cereals is $4.00.')); // [["$4.00", "4", "00"]]
// console.log(groupPrice("No price here.")); // []