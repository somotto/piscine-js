const split = (str, separator) => {
    if (separator === undefined || separator === '') {
      return Array.from(str);
    }
    
    const result = [];
    let startIndex = 0;
    let foundIndex;
  
    while ((foundIndex = str.indexOf(separator, startIndex)) !== -1) {
      result.push(str.slice(startIndex, foundIndex));
      startIndex = foundIndex + separator.length;
      
      // Safety check to prevent infinite loop
      if (startIndex >= str.length) break;
    }
  
    result.push(str.slice(startIndex));
    return result;
  };
  
  const join = (arr, separator = ',') => {
    if (!Array.isArray(arr)) return '';
    
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
      if (i < arr.length - 1) {
        result += separator;
      }
    }
    
    return result;
  };