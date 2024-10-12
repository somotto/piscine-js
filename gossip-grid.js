import { gossips } from './gossip-grid.data.js';

export function grid() {
    const body = document.body;


    const gossipContainer = document.createElement('div');
    gossipContainer.className = 'gossip-container';

    function renderGossips() {

        gossipContainer.innerHTML = '';


        const formCard = document.createElement('div');
        formCard.className = 'gossip';

        const form = document.createElement('form');
        const textarea = document.createElement('textarea');
        textarea.placeholder = 'Enter your gossip here...';

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Share gossip!';
        submitButton.type = 'submit';

        form.appendChild(textarea);
        form.appendChild(submitButton);
        formCard.appendChild(form);
        gossipContainer.appendChild(formCard);


        for (const gossip of gossips) {
            const gossipCard = document.createElement('div');
            gossipCard.className = 'gossip';
            gossipCard.textContent = gossip;
            gossipContainer.appendChild(gossipCard);
        }


        body.appendChild(gossipContainer);
    }


    function applyStyles() {
        const widthInput = document.getElementById('width');
        const fontSizeInput = document.getElementById('fontSize');
        const backgroundInput = document.getElementById('background');

        const cards = document.querySelectorAll('.gossip');
        cards.forEach(card => {
            card.style.width = `${widthInput.value}px`;
            card.style.fontSize = `${fontSizeInput.value}px`;
            card.style.backgroundColor = `hsl(280, 50%, ${backgroundInput.value}%)`;
        });
    }


    gossipContainer.addEventListener('submit', (event) => {
        event.preventDefault();

        const textarea = event.target.querySelector('textarea');
        const newGossip = textarea.value.trim();

        if (newGossip) {
            gossips.unshift(newGossip);
            textarea.value = '';
            renderGossips();
            applyStyles();
        }
    });


    const rangesDiv = document.createElement('div');
    rangesDiv.className = 'ranges';

    const widthControl = createRangeControl('Width', 200, 800, 'width', 250);
    const fontSizeControl = createRangeControl('Font Size', 20, 40, 'fontSize', 20);
    const backgroundControl = createRangeControl('Background Lightness', 20, 75, 'background', 50);

    rangesDiv.appendChild(widthControl);
    rangesDiv.appendChild(fontSizeControl);
    rangesDiv.appendChild(backgroundControl);

    body.appendChild(rangesDiv);
    renderGossips();
    applyStyles();

    function createRangeControl(labelText, min, max, id, defaultValue) {
        const rangeDiv = document.createElement('div');
        const label = document.createElement('label');
        label.textContent = labelText;
        label.setAttribute('for', id);

        const input = document.createElement('input');
        input.type = 'range';
        input.min = min;
        input.max = max;
        input.value = defaultValue;
        input.className = 'range';

        input.addEventListener('input', applyStyles);

        const span = document.createElement('span');
        span.textContent = defaultValue;
        input.addEventListener('input', () => {
            span.textContent = input.value;
        });

        rangeDiv.appendChild(label);
        rangeDiv.appendChild(input);
        rangeDiv.appendChild(span);

        return rangeDiv;
    }
}