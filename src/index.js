import './style.css'
import startGame from './domManipulation'
import backgroundWaves from './background.js'
const GAMEBOARD_SIZE = 10;
const NUMBER_OF_SHIPS = 4;
backgroundWaves();
startGame(GAMEBOARD_SIZE, NUMBER_OF_SHIPS);

