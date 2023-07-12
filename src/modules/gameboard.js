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
        this.gameboard[x - z][y] = ships.number;
        z++;
      } else {
        this.gameboard[x + i][y] = ships.number;
      }
    }
    this.ships.push(ship);
  }

  placeShipCPU(ship) {
    let x = parseInt(Math.random() * 10);
    let y = parseInt(Math.random() * 10);
    this.placeShip(ship, x, y);
  }

  attackShip(x, y) {
    if (this.gameboard[x][y] === this.ships.number) {
      for (let i = 0; i < this.ships.length; i++) {
        if (this.ships[i].number === this.ships.ship.number) {
          console.log("Du hast " + this.ships[i].name + " getroffen");
        }
        if (this.ships[i].name === "cruiser") {
          console.log("Du hast " + this.ships[i].name + " getroffen");
        }
      }
    } else {
      console.log("Leider nicht getroffen");
    }
  }
}

export { Gameboard };
