"use strict";

class Gameboard {
  constructor() {
    this.gameboard = [];
  }

  createGameboard() {
    for (let i = 0; i < 10; i++) {
      let innerArray = [];
      this.gameboard.push(innerArray);
      for (let z = 0; z < 10; z++) {
        innerArray.push(0);
      }
    }
  }

  placeShip(x, y) {
    this.gameboard[x][y] = "M";
  }
}

export { Gameboard };
