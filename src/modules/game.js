"use strict";
import { Player } from "./player";
import { Gameboard } from "./gameboard";

class Game {
  constructor() {
    this.player = {};
  }

  createPlayer(namePlayer) {
    this.player = new Player(namePlayer);
  }
}

export { Game };
