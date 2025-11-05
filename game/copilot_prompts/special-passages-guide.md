# Special Passages Documentation

## System Passages (Required/Core)

### StoryTitle
- **Purpose:** Sets the title of your story
- **Content:** Plain text only
- **Example:** `Card game`

### StoryData
- **Purpose:** Contains story metadata and configuration
- **Content:** JSON format with story settings
- **Key fields:**
  - `ifid`: Unique identifier for the story
  - `format`: Story format (SugarCube, Harlowe, etc.)
  - `start`: Starting passage name
  - `tag-colors`: Color coding for passage tags

## Display Passages (Optional but Recommended)

### StoryAuthor
- **Purpose:** Author information displayed in story interface
- **Content:** Author name, can use Twine markup
- **Position:** Usually positioned away from main story flow
- **Example:** `!!! Mystery Author`

### StoryBanner
- **Purpose:** Banner/header image or content at top of story
- **Content:** HTML/images, typically logos or header graphics
- **Usage:** `<img src="img/game.jpg" alt="Game">`
- **Note:** Appears above story content

### StoryDisplayTitle
- **Purpose:** Custom title display (overrides basic StoryTitle)
- **Content:** Rich formatted title using Twine markup
- **Usage:** Can include styling, multiple lines, etc.
- **Example:** `!! Demo Game` with subtitle

### StoryMenu
- **Purpose:** Persistent navigation menu
- **Content:** Links that appear on every passage
- **Usage:** Common for inventory, character sheets, help
- **Note:** Links only - descriptive text not displayed

## Utility Passages

### PassageFooter
- **Purpose:** Content appended to every passage
- **Content:** Debug info, common UI elements, etc.
- **Usage:** Often conditional based on variables
- **Example:** Debug information, navigation aids

### StoryStylesheet
- **Purpose:** Custom CSS styles for the story
- **Content:** CSS rules or @import statements
- **Usage:** `@import url("styles/custom.css");`

### Story JavaScript
- **Purpose:** Custom JavaScript code
- **Content:** JS functions, macros, event handlers
- **Usage:** Import external scripts or define custom functions

## Best Practices

1. **Keep special passages organized** in a separate file (like 00_header.twee)
2. **Use comments** to explain the purpose of each special passage
3. **Position metadata** helps organize passages in Twine editor
4. **Tag special passages** with distinctive tags for easy identification
5. **Test thoroughly** - special passages affect the entire story interface

## Common Special Passage Names

- `StoryInit` - Initialize variables at story start
- `PassageHeader` - Content prepended to every passage  
- `PassageReady` - JavaScript executed when passage is ready
- `PassageDone` - JavaScript executed after passage transition