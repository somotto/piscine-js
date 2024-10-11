export function generateLetters() {
    const container = document.body;
    const totalLetters = 120;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < totalLetters; i++) {
        const letterDiv = document.createElement('div');
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];

        const fontSize = 11 + Math.round((i / (totalLetters - 1)) * (130 - 11));
        let fontWeight;

        if (i < totalLetters / 3) {
            fontWeight = 300;
        } else if (i < (2 * totalLetters) / 3) {
            fontWeight = 400;
        } else {
            fontWeight = 600;
        }

        letterDiv.style.fontSize = `${fontSize}px`;
        letterDiv.style.fontWeight = fontWeight;
        letterDiv.textContent = randomLetter;

        container.appendChild(letterDiv);
    }
}