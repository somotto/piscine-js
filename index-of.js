const indexOf = (arr, searchElement, fromIndex = 0) => {
    const len = arr.length;
    let k = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0);
  
    for (; k < len; k++) {
      if (k in arr && arr[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
  
  const lastIndexOf = (arr, searchElement, fromIndex = arr.length - 1) => {
    const len = arr.length;
    let k = fromIndex >= 0 ? Math.min(fromIndex, len - 1) : len + fromIndex;
  
    for (; k >= 0; k--) {
      if (k in arr && arr[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
  
  const includes = (arr, searchElement, fromIndex = 0) => {
    const len = arr.length;
    let k = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0);
  
    for (; k < len; k++) {
      if (k in arr && arr[k] === searchElement) {
        return true;
      }
    }
    return false;
  };