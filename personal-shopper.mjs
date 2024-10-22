import fs from 'fs';

const commands = {
    create: {
        description: "takes a filename as argument and create it (should have `.json` extension specified)",
        action: (filename) => {
            fs.writeFileSync(filename, '{}');
        }
    },
    delete: {
        description: "takes a filename as argument and delete it",
        action: (filename) => {
            fs.unlinkSync(filename);
        }
    },
    add: {
        description: "adds or updates an item in the shopping list with specified quantity",
        action: (filename, item, quantity = 1) => {
            if (!item) {
                console.error('No elem specified.');
                return;
            }

            const list = JSON.parse(fs.readFileSync(filename, 'utf8'));

            if (quantity < 0) {

                if (list[item]) {
                    const newQuantity = list[item] + quantity;
                    if (newQuantity <= 0) {
                        delete list[item];
                    } else {
                        list[item] = newQuantity;
                    }
                }
            } else {
                list[item] = (list[item] || 0) + quantity;
            }

            fs.writeFileSync(filename, JSON.stringify(list, null, 2));
        }
    },
    rm: {
        description: "removes items from the shopping list",
        action: (filename, item, quantity) => {
            if (!item) {
                console.error('No elem specified.');
                return;
            }

            const list = JSON.parse(fs.readFileSync(filename, 'utf8'));

            if (!list[item]) return;

            if (quantity === undefined) {
                delete list[item];
            } else if (isNaN(quantity)) {
                console.error('Unexpected request: nothing has been removed');
                return;
            } else if (quantity < 0) {

                list[item] = (list[item] || 0) - quantity;
            } else {
                const newQuantity = list[item] - quantity;
                if (newQuantity <= 0) {
                    delete list[item];
                } else {
                    list[item] = newQuantity;
                }
            }

            fs.writeFileSync(filename, JSON.stringify(list, null, 2));
        }
    },
    ls: {
        description: "displays the current shopping list",
        action: (filename) => {
            const list = JSON.parse(fs.readFileSync(filename, 'utf8'));
            if (Object.keys(list).length === 0) {
                console.log('Empty list.');
                return;
            }
            for (const [item, quantity] of Object.entries(list)) {
                console.log(`- ${item} (${quantity})`);
            }
        }
    },
    help: {
        description: "displays all available commands",
        action: () => {
            console.log('Commands:');
            for (const [cmd, info] of Object.entries(commands)) {
                console.log(`- ${cmd}: ${info.description}`);
            }
        }
    }
};

const [filename, command, item, quantityArg] = process.argv.slice(2);
const quantity = quantityArg ? Number(quantityArg) : undefined;

if (!command || command === 'help') {
    commands.help.action();
} else if (command === 'ls') {
    commands.ls.action(filename);
} else if (commands[command]) {
    commands[command].action(filename, item, quantity);
} else {
    console.error('Unknown command');
    commands.help.action();
}