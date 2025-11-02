@echo off
echo Building Twine game...

:: Create build directory if it doesn't exist
if not exist "build" mkdir build

:: Build the game with Tweego (add to path)
tweego -o build/game.html game/passages/ game/scripts/ game/styles/

:: Copy images to build directory
if exist "game\img" (
    echo Copying images...
    xcopy /E /I /Y game\img build\img
    echo Images copied to build\img\
) else (
    echo No img directory found
)

:: Copy index.html for local testing
if exist "game\index.html" (
    copy game\index.html build\index.html
    echo Landing page copied
)

echo.
echo Build complete! Files in build\ directory:
dir build

echo.
echo Open build\game.html to play locally
echo Or open build\index.html for the landing page