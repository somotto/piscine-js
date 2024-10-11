import { colors } from './fifty-shades-of-cold.data.js';

export function generateClasses() {
  const style = document.createElement('style');
  document.head.appendChild(style);

  colors.forEach(color => {
    style.sheet.insertRule(`.${color} { background: ${color}; }`, 0);
  });
}

export function generateColdShades() {
  const coldShades = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
  const container = document.body;

  colors.forEach(color => {
    if (coldShades.some(shade => color.includes(shade))) {
      const div = document.createElement('div');
      div.className = color;
      div.textContent = color;
      container.appendChild(div);
    }
  });
}

export function choseShade(color) {
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    div.className = color;  
  });
}
