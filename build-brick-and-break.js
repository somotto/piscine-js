let brickInterval;

function build(numberOfBricks) {
    let brickCount = 0;
    const tower = document.querySelector('.tower');

    if (!tower) {
        console.error("Tower element not found");
        return;
    }

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
    if (tower) {
        const lastBrick = tower.lastElementChild;
        if (lastBrick) {
            lastBrick.remove();
        }
    }
}

window.build = build;
window.repair = repair;
window.destroy = destroy;

build(30);