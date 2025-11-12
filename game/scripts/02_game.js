makeSpeakerMacro("voice", "Voice")


Macro.add('qspeak', {
    handler: function () {
        var speaker = this.args[0];
        var text = this.args.slice(1).join(' ');
        var html = '<div style="border:1px solid #33C; padding:8px; margin:6px 0; border-radius:4px;">' +
                   '<b>' + speaker + ':</b> ' + text +
                   '</div>';
        this.output.append(Wikifier.wikifyEval(html));
    }
});

// Macro to add locations to the list
Macro.add("addinventory", {
    handler() {
        if (this.args.length < 2) {
            return this.error("addinventory macro requires at least 2 arguments: name and passage");
        }
        
        const name = this.args[0];
        const passage = this.args[1];
        
        // Initialize the locations array if it doesn't exist
        if (!State.variables.inventory) {
            State.variables.inventory = [];
        }
        
        // Check if location already exists (optional - prevents duplicates)
        const exists = State.variables.inventory.some(item => item.name === name || item.passage === passage);
        if (!exists) {
            State.variables.inventory.push({name: name, passage: passage});
        }
    }
});

// Macro to display all locations as links
Macro.add("showinventory", {
    handler() {
        if (!State.variables.inventory || State.variables.inventory.length === 0) {
            this.output.append("No items available.");
            return;
        }
        
        const list = document.createElement("ul");
        State.variables.inventory.forEach(item => {
            const listItem = document.createElement("li");
            const link = `[[${item.name}->${item.passage}]]`;
            new Wikifier(listItem, link);
            list.appendChild(listItem);
        });
        
        this.output.append(list);
    }
});

// Function to check if an item is in inventory (returns boolean for use in expressions)
setup.ininventory = function(itemName) {
    // Initialize the inventory array if it doesn't exist
    if (!State.variables.inventory) {
        State.variables.inventory = [];
    }
    
    // Check if item exists in inventory by name
    return State.variables.inventory.some(item => item.name === itemName);
};
