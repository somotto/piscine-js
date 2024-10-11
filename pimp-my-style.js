import { styles } from './pimp-my-style.data.js';

let currentIndex = 0;
let isRemoving = false;

function pimp() {
  const button = document.querySelector('.button');
  
  if (!isRemoving) {
    if (currentIndex < styles.length) {
      button.classList.add(styles[currentIndex]);
      currentIndex++;
    } else {
      isRemoving = true;
      button.classList.toggle('unpimp', true);
    }
  } else {
    if (currentIndex > 0) {
      currentIndex--;
      button.classList.remove(styles[currentIndex]);
    } else {
      isRemoving = false;
      button.classList.toggle('unpimp', false);
    }
  }
}

document.addEventListener('click', pimp);