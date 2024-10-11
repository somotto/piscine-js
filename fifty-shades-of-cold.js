import { colors } from './fifty-shades-of-cold.data.js';

export function generateClasses() {
    const style = document.createElement('style');
    colors.forEach(color => {
        style.textContent += `.${color.toLowerCase()} { background: ${color.toLowerCase()}; }\n`;
    });
    document.head.appendChild(style);
}

export function generateColdShades() {
    const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
    const container = document.createElement('div');
    container.id = 'container';

    colors.forEach(color => {
        if (coldColors.some(coldColor => color.toLowerCase().includes(coldColor))) {
            const div = document.createElement('div');
            div.className = color.toLowerCase();
            div.textContent = color;
            container.appendChild(div);
        }
    });

    document.body.appendChild(container);
}

export function choseShade(shade) {
    const divs = document.querySelectorAll('#container div');
    divs.forEach(div => {
        div.className = shade.toLowerCase();
    });
}
