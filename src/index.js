import "./styles.css";
import { Player } from "./modules/player";
import { Game } from "./modules/game";
import { Gameboard } from "./modules/gameboard";
import { Ship } from "./modules/ship";

(function init() {
  const gameboardPlayer = new Gameboard();
  const gameboardKI = new Gameboard();
  const carrier = new Ship("carrier", 5, 2);
  const battleship = new Ship("battleship", 4);
  const cruiser = new Ship("cruiser", 3);
  const submarine = new Ship("submarine", 3);
  const destroyer = new Ship("destroyer", 2);

  gameboardPlayer.createGameboard();
  gameboardKI.createGameboard();

  gameboardPlayer.placeShip(carrier, 0, 1);
  gameboardPlayer.placeShip(cruiser, 5, 2);

  gameboardPlayer.attackShip(5, 2);

  console.log(gameboardPlayer.gameboard);
})();
