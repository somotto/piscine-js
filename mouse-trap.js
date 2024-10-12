let lastCircle = null;
let box = null;

export function createCircle() {
    document.addEventListener('click', (event) => {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.left = `${event.clientX - 25}px`;
        circle.style.top = `${event.clientY - 25}px`;
        circle.style.background = 'white';
        document.body.appendChild(circle);
        lastCircle = circle;
    });
}

export function moveCircle() {
    document.addEventListener('mousemove', (event) => {
        if (lastCircle) {
            const circleRect = lastCircle.getBoundingClientRect();
            const boxRect = box.getBoundingClientRect();

            let newX = event.clientX - 25;
            let newY = event.clientY - 25;

            if (
                circleRect.left > boxRect.left &&
                circleRect.right < boxRect.right &&
                circleRect.top > boxRect.top &&
                circleRect.bottom < boxRect.bottom
            ) {
                lastCircle.style.background = 'var(--purple)';
                newX = Math.max(boxRect.left + 1, Math.min(newX, boxRect.right - 51));
                newY = Math.max(boxRect.top + 1, Math.min(newY, boxRect.bottom - 51));
            } else {
                lastCircle.style.background = 'white';
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