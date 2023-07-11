"use strict";
import { Ship } from "./ship";

class Gameboard {
  constructor() {
    this.gameboard = [];
    this.ships = [];
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

  placeShip(ship, x, y) {
    let z = 1;
    for (let i = 0; i < ship.shipLength(); i++) {
      if ([x + i] > 9) {
        this.gameboard[x - z][y] = 1;
        z++;
      } else {
        this.gameboard[x + i][y] = 1;
      }
    }
    this.ships.push(ship);
  }

  placeShipCPU(ship) {
    let x = parseInt(Math.random() * 10);
    let y = parseInt(Math.random() * 10);
    this.placeShip(ship, x, y);
  }

  checkPlace() {}
}

export { Gameboard };
