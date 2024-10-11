function build(numberOfBricks) {
    let brickCount = 0;
    const tower = document.body;  

    function addBrick() {
        if (brickCount < numberOfBricks) {
            const brick = document.createElement('div');
            brick.id = `brick-${brickCount + 1}`;
            brick.classList.add('brick');

            if ((brickCount % 3) === 1) {
                brick.dataset.foundation = 'true';
            }

            tower.appendChild(brick);
            brickCount++;

            setTimeout(addBrick, 100);  
        }
    }

    addBrick();  
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
    const lastBrick = document.body.lastElementChild;
    if (lastBrick && lastBrick.classList.contains('brick')) {
        lastBrick.remove();
    }
}

window.build = build;
window.repair = repair;
window.destroy = destroy;

build(200);  