export const getArchitects = () => {
    const architects = document.getElementsByTagName('a');
    const nonArchitects = document.querySelectorAll('body > :not(a)');
    return [Array.from(architects), Array.from(nonArchitects)];
};

export const getClassical = () => {
    const classicalArchitects = document.getElementsByClassName('classical');
    const nonClassicalArchitects = document.querySelectorAll('a:not(.classical)');
    return [Array.from(classicalArchitects), Array.from(nonClassicalArchitects)];
};

export const getActive = () => {
    const activeClassicalArchitects = document.querySelectorAll('a.classical.active');
    const nonActiveClassicalArchitects = document.querySelectorAll('a.classical:not(.active)');
    return [Array.from(activeClassicalArchitects), Array.from(nonActiveClassicalArchitects)];
};

export const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano');
    const otherActiveClassicalArchitects = Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'));
    return [bonannoPisano, otherActiveClassicalArchitects];
};