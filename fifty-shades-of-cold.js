export function generateClasses() {
    const style = document.createElement('style');
    const colors = getColors(); // We'll define this function to get colors from the global scope
    colors.forEach(color => {
        style.textContent += `.${color} { background: ${color}; }\n`;
    });
    document.head.appendChild(style);
}

export function generateColdShades() {
    const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
    const colors = getColors();
    colors.forEach(color => {
        if (coldColors.some(coldColor => color.toLowerCase().includes(coldColor))) {
            const div = document.createElement('div');
            div.className = color;
            div.textContent = color;
            document.body.appendChild(div);
        }
    });
}

export function choseShade(shade) {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.className = shade;
    });
}

function getColors() {
    return typeof colors !== 'undefined' ? colors : [];
}