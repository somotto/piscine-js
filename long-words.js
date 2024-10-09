const longWords = (arr) => {
    return arr.every(element => typeof element === 'string' && element.length >= 5);
  };
  
  const oneLongWord = (arr) => {
    return arr.some(element => typeof element === 'string' && element.length >= 10);
  };
  
  const noLongWords = (arr) => {
    return arr.every(element => typeof element !== 'string' || element.length < 7);
  };
  
//   const testArray1 = ["hello", "world", "javascript", "programming"];
//   const testArray2 = ["short", "long string here", "medium"];
//   const testArray3 = ["one", "two", "three", "four", "five"];
  
//   console.log(longWords(testArray1));  
//   console.log(longWords(testArray2));  
//   console.log(longWords(testArray3));  
  
//   console.log(oneLongWord(testArray1));  
//   console.log(oneLongWord(testArray2)); 
//   console.log(oneLongWord(testArray3));  
  
//   console.log(noLongWords(testArray1));  
//   console.log(noLongWords(testArray2));  
//   console.log(noLongWords(testArray3)); 