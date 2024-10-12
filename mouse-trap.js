let lastCircle = null;
let box = null;
let isInsideBox = false;

export function createCircle() {
  document.addEventListener('click', (event) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = `${event.clientX - 25}px`;
    circle.style.top = `${event.clientY - 25}px`;
    circle.style.background = 'white';
    document.body.appendChild(circle);
    lastCircle = circle;
    isInsideBox = false;
  });
}

export function moveCircle() {
  document.addEventListener('mousemove', (event) => {
    if (lastCircle) {
      const circleRect = lastCircle.getBoundingClientRect();
      const boxRect = box.getBoundingClientRect();

      let newX = event.clientX - 25;
      let newY = event.clientY - 25;
      const insideX = newX > boxRect.left && newX + 50 < boxRect.right;
      const insideY = newY > boxRect.top && newY + 50 < boxRect.bottom;
      const isInside = insideX && insideY;

      if (isInside) {

        lastCircle.style.background = 'var(--purple)';
        isInsideBox = true;
      } else if (!isInsideBox) {
        lastCircle.style.background = 'white';
      }

      if (isInsideBox) {
        newX = Math.max(boxRect.left + 1, Math.min(newX, boxRect.right - 51));
        newY = Math.max(boxRect.top + 1, Math.min(newY, boxRect.bottom - 51));
      }

      lastCircle.style.left = `${newX}px`;
      lastCircle.style.top = `${newY}px`;
    }
  });
}

export function setBox() {
  box = document.createElement('div');
  box.className = 'box';
  document.body.appendChild(box);

  const centerX = window.innerWidth / 2 - box.offsetWidth / 2;
  const centerY = window.innerHeight / 2 - box.offsetHeight / 2;
  box.style.left = `${centerX}px`;
  box.style.top = `${centerY}px`;
}