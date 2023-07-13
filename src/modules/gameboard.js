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
        this.gameboard[x - z][y] = ship.shipNumber;
        z++;
      } else {
        this.gameboard[x + i][y] = ship.shipNumber;
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
    for (let i = 0; i < this.ships.length; i++) {
      if (this.gameboard[x][y] === 5) {
        console.log(this.ships[i].name);
        this.ships[i].timesHit++;
        this.gameboard[x][y] = "Treffer";
      }
      if (this.ships[i].shipNumber === 4) {
        console.log(this.ships[i].name);
        this.ships[i].timesHit++;
        this.gameboard[x][y] = "Treffer";
      }
      if (this.ships[i].shipNumber === 3) {
        console.log(this.ships[i].name);
        this.ships[i].timesHit++;
        this.gameboard[x][y] = "Treffer";
      }
      if (this.ships[i].shipNumber === 2) {
        console.log(this.ships[i].name);
        this.ships[i].timesHit++;
        this.gameboard[x][y] = "Treffer";
      }
      if (this.ships[i].shipNumber === 1) {
        console.log(this.ships[i].name);
        this.ships[i].timesHit++;
        this.gameboard[x][y] = "Treffer";
      }
      if (this.gameboard[x][y] === 0) {
        this.gameboard[x][y] = "X";
        console.log("Daneben");
      }
    }
  }
}

export { Gameboard };
