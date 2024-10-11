let brickInterval;

function build(numberOfBricks) {
    let brickCount = 0;
    const tower = document.querySelector('.tower');

    brickInterval = setInterval(() => {
        if (brickCount < numberOfBricks) {
            const brick = document.createElement('div');
            brick.id = `brick-${brickCount + 1}`;
            brick.classList.add('brick');

            if ((brickCount % 3) === 1) {
                brick.dataset.foundation = 'true';
            }

            tower.appendChild(brick);
            brickCount++;
        } else {
            clearInterval(brickInterval);
        }
    }, 100);
}

function repair(...ids) {
    ids.forEach(id => {
        const brick = document.getElementById(id);
        if (brick) {
            if (brick.dataset.foundation === 'true') {
                brick.dataset.repaired = 'in progress';
            } else {
                brick.dataset.repaired = 'true';
            }
        }
    });
}

function destroy() {
    const tower = document.querySelector('.tower');
    const lastBrick = tower.lastElementChild;
    if (lastBrick) {
        lastBrick.remove();
    }
}

document.querySelector('.tools').addEventListener('click', (event) => {
    if (event.target.textContent === '🔨') {
        repair('brick-1', 'brick-2', 'brick-3');
    } else if (event.target.textContent === '🧨') {
        destroy();
    }
});
build(15);