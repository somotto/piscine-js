const letterSpaceNumber = (str) => {
    const regex = /[a-zA-Z] \d(?!\d)(?![a-zA-Z])/g;
    return str.match(regex) || [];
  };
  
//   // Test cases
//   console.log(letterSpaceNumber('example 1, example 20'));
//   console.log(letterSpaceNumber('a 1 b 2 c 3 d 4 e5 f 6'));
//   console.log(letterSpaceNumber('string 22 string'));
//   console.log(letterSpaceNumber(''));
