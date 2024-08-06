# odin-battleship
In this project I implemented a version of the game battleship for 1 player.

## Features
### Difficulty
The user can select the difficulty of the computer:
- Easy: The computer picks a random position every single time, whether it hits a ship or not.
- Hard: The computer pics a random position until it hits a ship. Then, it looks for nearby positions until the whole ships is sunk. If in the process another ship is hit, the computer will first sink one ship and then continue with the rest.
### Ships placement
The user can place the ships randomly or manually.
-Manual placement: The user can click and drag the ships into the battlefield. The user can also rotate 90 degrees the ships by pressing "R" while the ship is selected. It is possible to remove every ship from their current placement and start all over again.
-Random placement: The user can also automatically place the ships.
### Visual feedback:
-There is a visual indicator to ease knowing where the user has actually clicked and where is the location of the user's cursor.
-Likewise, when it is the computer's turn before the computer hits its decided location, it first traverse the user's gameboard and highlight the column and row of the coordinates it is traveling.
