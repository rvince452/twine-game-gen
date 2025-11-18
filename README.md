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

See the wiki associated with the github project for full details. 

Code Iteration Summary:

1. Iteration 1: Basic separation into TWEE files and using TWEEGO and rationale behind that. Special passages and required passages.
1. Iteration 2: Using AI (Copilot) to flesh out game entities (locations, objects, characters) and constructing map. Including AI prompts
1. Iteration 3: 
* Use AI to generate a better banner picture (an old door to represent choices)
* Debug panel to show current passage, shown only when debug flag is activated
* Footer panel - empty for now
* Speaker box - when a character is speaking, put their text in a box that is labeled with their name.
* Handling annoying line breaks 
* Add inventory macros and split into separate files
* Change Visual Code settings so that word wrap is on as a default

Future:
* Back vs Return and use in objects and inventory
Take a bedroom and add a generic closet.
Now I want the same closet in another bedroom so I use return so I can use the same one, else I have to make my own.
Next I put multiple keys inside different rooms but i want to describe the  key.
* Action that takes some time and then shows results And updates the page
* Link that shows more text after click

--Example, I have a link, the user can click it and then I can perform some actions and show next text
--The link goes away and link text is replaced.
The room looks empty. 
<<linkreplace "Look closer">>\
You notice a hidden door behind the curtain.
<</linkreplace>>

---Example similar to the above, but in this case I append text to the link text
<<linkappend "Show">>
More text.
<</linkappend>>

---Example of lnke choices. If they choose one then I can execute that block and replace the whole block with tet. In this case the choices dif is removed (one time choice). If I had not done the replace then the choices remain.
Choices!
<div id="choices">
	<<link "You agree but show your annoyance..">>
		<<replace "#choices">>Fine, you huff.<</replace>>
	<</link>>
	<<link "You quickly agree">>
		<<replace "#choices">>Sure thing, Katie!<</replace>>
	<</link>>
</div>

----Here I want to simulate some time passing and make the user wait. In the end, their choice is removed.
<<set _hours to 2>>\
<span id="status">\
<<back>>
</span>\
<span id="work">\
<<link "Begin work">>\
<<set $hour += _hours>>\
<<replace "#status">>working<</replace>>\
<<timed "2s">><<replace "#status">>working<</replace>>\
<<next>><<replace "#status">>working.<</replace>>\
<<next>><<replace "#status">>working..<</replace>>\
<<next>><<replace "#status">>working...<</replace>>\
<<next>><<replace "#status">>You got alot done in _hours hours. <<return>><</replace>>\
<</timed>>
<<replace "#work">><</replace>>\
<</link>>
</span>


--button is similar to link but button
<<button "skill description">>
  <<set $score += 10>>
  <<if $playerStartSkill == "hacker">>
	<<goto "descr-hacker">>
   <<elseif $playerStartSkill == "detective">>
    	<<goto "descr-detective">>
   <</if>>
<</button>>

--Here is a combination:
Combination1: <<set $dial1 to 10>><span id="stats-str"><<print $dial1>></span> \
( <<button "[+]">><<set $dial1++>><<replace "#stats-str">><<print $dial1>><</replace>><</button>> \
| <<button "[-]">><<set $dial1-->><<replace "#stats-str">><<print $dial1>><</replace>><</button>> )