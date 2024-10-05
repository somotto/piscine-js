const groupPrice = (input) => {
    const regex = /([A-Z]{3}\d+)(?:\.(\d{2}))?/g; // Matches currency format e.g., USD12.31, EUR45.00
    const result = [];
    let match;

    while ((match = regex.exec(input)) !== null) {
        const fullPrice = match[1] + (match[2] ? '.' + match[2] : '');
        const integerPart = match[1].replace(/[^0-9]/g, '');
        const fractionalPart = match[2] || '00';
        
        result.push([fullPrice, integerPart, fractionalPart]);
    }

    return result;
};

// Example usage
// console.log(groupPrice("The total cost is USD12.31 and EUR45.00")); // [["USD12.31", "12", "31"], ["EUR45.00", "45", "00"]]
// console.log(groupPrice("No price here.")); // []