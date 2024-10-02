const pyramid = (char, height) => {
    let result = '';
    for (let i = 1; i <= height; i++) {
      const spaces = ' '.repeat((2 * height - 1 - (2 * i - 1)) / 2);
      const chars = char.repeat(2 * i - 1);
      result += spaces + chars;
      if (i < height) {
        result += '\n';
      }
    }
    return result;
  };
  
//   console.log(pyramid('*', 5));
  