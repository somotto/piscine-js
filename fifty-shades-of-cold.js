import { colors } from './fifty-shades-of-cold.data.js';

export function generateClasses() {
    const styleTag = document.createElement('style');
    document.head.appendChild(styleTag);


    colors.forEach(color => {
        styleTag.innerHTML += `
            .${color} {
                background: ${color};
            }
        `;
    });
}

export function generateColdShades() {
    const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];

    coldColorNames.forEach(color => {
        const div = document.createElement('div');
        div.className = color;
        div.textContent = color;
        document.body.appendChild(div);
    });
}

export function choseShade(shade) {
    const divs = [...document.querySelectorAll('div')];

    divs.forEach(div => {
        if (div.textContent !== shade) {
            div.className = shade;
        }
    });
}