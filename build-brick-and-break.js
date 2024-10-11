let brickCount = 0;

export function build(amount) {
    const interval = setInterval(() => {
        if (brickCount < amount) {
            brickCount++;
            const brick = document.createElement('div');
            brick.id = `brick-${brickCount}`;
            if (brickCount % 3 === 2) {
                brick.setAttribute('data-foundation', 'true');
            }
            document.body.appendChild(brick);
        } else {
            clearInterval(interval);
        }
    }, 100);
}

export function repair(...ids) {
    ids.forEach(id => {
        const brick = document.getElementById(id);
        if (brick) {
            if (brickCount % 3 === 2) {
                brick.setAttribute('data-repaired', 'in progress');
            } else {
                brick.setAttribute('data-repaired', 'true');
            }
        }
    });
}

export function destroy() {
    const bricks = document.querySelectorAll('div');
    if (bricks.length > 0) {
        const lastBrick = bricks[bricks.length - 1];
        lastBrick.remove();
    }
}