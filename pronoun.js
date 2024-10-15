function pronoun(input) {
    const words = input.toLowerCase()
        .split(/\s+/)
        .map(word => word.replace(/[^\w]/g, ''));

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
                const nextWord = words[i + 1];
                if (!result[word].word.includes(nextWord)) {
                    result[word].word.push(nextWord);
                }
            }
        }
    }

    return result;
}
