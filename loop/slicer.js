const slice = (input, start, end) => {
    if (typeof input !== 'string' && !Array.isArray(input)) {
      throw new TypeError('Input must be a string or an array');
    }
  
    const length = input.length;
  
    start = start === undefined ? 0 : start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  
    end = end === undefined ? length : end < 0 ? Math.max(length + end, 0) : Math.min(end, length);
  
    if (start > end) {
      return typeof input === 'string' ? '' : [];
    }
  
    if (typeof input === 'string') {
      return input.substring(start, end);
    } else {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(input[i]);
      }
      return result;
    }
  };