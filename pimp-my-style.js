import { styles } from './pimp-my-style.data.js';

let currentIndex = -1; 

const button = document.querySelector('.button');

export function pimp() {
   
    if (currentIndex < styles.length - 1) {
        currentIndex++; 
        button.classList.toggle('unpimp', true); 
        button.classList.add(styles[currentIndex]); 
    } else {
        button.classList.toggle('unpimp', true); 
        button.classList.remove(styles[currentIndex]); 
        currentIndex--; 

        if (currentIndex < -1) {
            button.classList.toggle('unpimp', false); 
            currentIndex = -1; 
        }
    }
}