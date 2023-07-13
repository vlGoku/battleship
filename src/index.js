import "./styles.css";
import { Player } from "./modules/player";
import { Game } from "./modules/game";
import { Gameboard } from "./modules/gameboard";
import { Ship } from "./modules/ship";
import { GUIGameboard } from "./modules/GUIBoard";

(function init() {
  const gameboardPlayer = new Gameboard();
  const gameboardKI = new Gameboard();
  const carrier = new Ship("carrier", 5, 5);
  const battleship = new Ship("battleship", 4, 4);
  const cruiser = new Ship("cruiser", 3, 3);
  const submarine = new Ship("submarine", 3, 2);
  const destroyer = new Ship("Destroyer", 2, 1);

  gameboardPlayer.createGameboard();
  gameboardKI.createGameboard();

  gameboardPlayer.placeShip(carrier, 1, 1);

  gameboardPlayer.attackShip(1, 1);
  gameboardPlayer.attackShip(2, 1);

  console.log(gameboardPlayer.gameboard);
  console.log(gameboardPlayer.counter);
})();
