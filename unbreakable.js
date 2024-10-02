const split = (str, separator) => {
    if (separator === undefined) return [str];
    
    const result = [];
    let startIndex = 0;
    let foundIndex;
  
    while ((foundIndex = str.indexOf(separator, startIndex)) !== -1) {
      result.push(str.slice(startIndex, foundIndex));
      startIndex = foundIndex + separator.length;
    }
  
    result.push(str.slice(startIndex));
    return result;
  };
  
  const join = (arr, separator = ',') => {
    if (arr.length === 0) return '';
    
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result += separator + arr[i];
    }
    
    return result;
  };