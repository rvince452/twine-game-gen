Macro.add("shout", {
    handler() {
        const msg = this.payload[0].contents.trim();
        new Wikifier(this.output, `<strong>${msg.toUpperCase()}!</strong>`);
    }
});

function makeSpeakerMacro(name, speakername, cssClass) {
    const finalClass = cssClass || name.toLowerCase();

    Macro.add(name.toLowerCase(), {
        tags: null, // container macro
        handler() {
            const text = this.payload[0].contents;

            // Create wrapper element
            const wrapper = document.createElement("div");
            wrapper.classList.add("speaker", finalClass);
            
            // Add box styling similar to qspeak macro
            wrapper.style.border = "1px solid #33C";
            wrapper.style.padding = "8px";
            wrapper.style.margin = "6px 0";
            wrapper.style.borderRadius = "4px";

            // Only show the label if not 'nar'
            if (name.toLowerCase() !== "nar") {
                const bold = document.createElement("b");
                bold.textContent = speakername + ": ";
                wrapper.appendChild(bold);
            }

            // Wikify the inner text
            new Wikifier(wrapper, text);

            // Append to passage
            this.output.append(wrapper);
        }
    });
}
