const vowels = /[aeiou]/gi;

const vowelDots = (str) => {
  return str.replace(vowels, match => match + '.');
};