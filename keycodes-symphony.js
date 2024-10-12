export function compose() {
    const body = document.body;

    const generateColor = (key) => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = key.charCodeAt(i) + ((hash << 5) - hash);
        }
        const color = `hsl(${hash % 360}, 70%, 50%)`;
        return color;
    };

    const createNote = (key) => {
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = key;
        note.style.backgroundColor = generateColor(key);
        body.appendChild(note);
    };

    const removeLastNote = () => {
        const notes = document.querySelectorAll('.note');
        if (notes.length > 0) {
            notes[notes.length - 1].remove();
        }
    };

    const clearAllNotes = () => {
        const notes = document.querySelectorAll('.note');
        notes.forEach(note => note.remove());
    };

    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();

        if (key.length === 1 && key >= 'a' && key <= 'z') {
            createNote(key);
        } else if (event.key === 'Backspace') {
            removeLastNote();
        } else if (event.key === 'Escape') {
            clearAllNotes();
        }
    });
}