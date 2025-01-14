const filterShortStateName = (arr) => arr.filter(state => state.length < 7);

const filterStartVowel = (arr) => arr.filter(state => /^[aeiou]/i.test(state));

const filter5Vowels = (arr) => arr.filter(state => (state.match(/[aeiou]/gi) || []).length >= 5);

const filter1DistinctVowel = (arr) => arr.filter(state => {
  const lowercaseState = state.toLowerCase();
  const vowels = new Set(lowercaseState.match(/[aeiou]/g) || []);
  return vowels.size === 1;
});



const multiFilter = (arr) => arr.filter(obj =>
  obj.capital.length >= 8 &&
  !/^[aeiou]/i.test(obj.name) &&
  /[aeiou]/i.test(obj.tag) &&
  obj.region !== 'South'
);
