import { styles } from './pimp-my-style.data.js';

let currentIndex = 0;
let isRemoving = false;

export function pimp() {
  const button = document.querySelector('.button');
  
  if (!isRemoving) {
  
    if (currentIndex < styles.length) {
      button.classList.add(styles[currentIndex]);
      currentIndex++;
    
      if (currentIndex === styles.length) {
        isRemoving = true;
        button.classList.add('unpimp');
      }
    }
  } else {

    if (currentIndex > 0) {
      currentIndex--;
      button.classList.remove(styles[currentIndex]);
      
      if (currentIndex === 0) {
        isRemoving = false;
        button.classList.remove('unpimp');
      }
    }
  }
}