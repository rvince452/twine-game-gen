# GEN-GAME - expandable base template for a twine Sugarcube game

A Twine interactive fiction game built with Tweego and SugarCube.

## Description

A expandable demo game

## Building the Game

This project uses Tweego to compile the Twee source files into a playable HTML game.

### Automated Builds

The game is automatically built using GitHub Actions whenever changes are pushed to the main branch:

- ✅ **Continuous Integration**: Automatically compiles the game on every push
- ✅ **GitHub Pages Deployment**: Game is automatically deployed and playable online
- ✅ **Artifact Downloads**: Compiled game files are available as downloadable artifacts

**Play Online**: The most recent version can be run from here: https://rvince452.github.io/twine-game-gen/

### Manual Build (Local Development)
If you download the code and install the prerequisites, then you can build the html by running:
build.bat

the output will be in the build folder.

#### Prerequisites

- [Tweego](https://www.motoslave.net/tweego/) - Twee compiler

- You can edit files with Notepad or any text editor but ideally use Visual Code:
    Visual Code
    Twee 3 Language Tools (Visual Code Extension)

#### Build Instructions

1. Navigate to the game directory
2. Run build.bat

## Project Structure

```
TODO 
```


## Playing the Game

Open `build/index.html` in any modern web browser to play the game. The actual game is in game.html

## Development

The game is written in Twee 3 format using SugarCube 2. Source files are organized by location and functionality in the `passages/` directory.

## License

See project license file

## Development notes and strategy

See the wiki associated with the github project