function pronoun(input) {
    const words = input.toLowerCase().split(/\s+/);

    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];

    const result = {};

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (pronouns.includes(word)) {
            if (!result[word]) {
                result[word] = { word: [], count: 0 };
            }

            result[word].count++;
            if (i + 1 < words.length) {
                if (!result[word].word.includes(words[i + 1])) {
                    result[word].word.push(words[i + 1]);
                }
            }
        }
    }

    return result;
}
