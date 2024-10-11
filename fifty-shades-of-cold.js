import { colors } from './fifty-shades-of-cold.data.js';

function generateClasses() {
  const style = document.createElement('style');
  colors.forEach(color => {
    style.textContent += `.${color.toLowerCase().replace(/\s+/g, '-')} { background: ${color.toLowerCase()}; }\n`;
  });
  document.head.appendChild(style);
}

function generateColdShades() {
  const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
  const container = document.getElementById('container'); 

  colors.forEach(color => {
    if (coldColors.some(coldColor => color.toLowerCase().includes(coldColor))) {
      const div = document.createElement('div');
      div.className = color.toLowerCase().replace(/\s+/g, '-');
      div.textContent = color;
      div.addEventListener('click', () => choseShade(color));
      container.appendChild(div);
    }
  });
}

function choseShade(shade) {
  const divs = document.querySelectorAll('#container div');
  divs.forEach(div => {
    div.className = shade.toLowerCase().replace(/\s+/g, '-');
  });
}

generateClasses();
generateColdShades();