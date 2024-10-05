const groupPrice = (str) => {
    const regex = /(\$|€|£|¥|USD|EUR|GBP|JPY)(\d+)\.(\d{2})/g;
    const matches = [];
    let match;
  
    while ((match = regex.exec(str)) !== null) {
      matches.push([match[0], match[2], match[3]]);
    }
  
    return matches;
  };

// // Example usage
// console.log(groupPrice('The price of the cereals is $4.00.')); // [["$4.00", "4", "00"]]
// console.log(groupPrice("No price here.")); // []