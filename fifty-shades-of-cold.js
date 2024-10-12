import { colors } from './fifty-shades-of-cold.data.js';

export const generateClasses = () => {
  const style = document.createElement('style');
  let styleContent = colors.map(color => `.${color} { background: ${color}; }`).join('\n');
  style.textContent = styleContent;
  document.head.appendChild(style);
};

export const generateColdShades = () => {
  const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
  const container = document.createElement('div');
  container.id = 'container';
  
  colors.forEach(color => {
    if (coldColors.some(coldColor => color.includes(coldColor))) {
      const div = document.createElement('div');
      div.className = color;
      div.textContent = color;
      div.addEventListener('click', () => choseShade(color));
      container.appendChild(div);
    }
  });

  document.body.appendChild(container);
};

export const choseShade = (shade) => {
  const divs = document.querySelectorAll('#container div');
  divs.forEach(div => {
    div.className = shade;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  generateClasses();
  generateColdShades();
});