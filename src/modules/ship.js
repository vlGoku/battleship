"use strict";
import { Gameboard } from "./gameboard";

class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.isSunk = false;
    this.timesHit = 0;
  }

  shipLength() {
    return this.length;
  }

  hit() {
    if (gameboard[i] == 2) {
      this.timesHit++;
    }
  }

  shipIsSunk() {
    if (this.length === this.timesHit) {
      this.isSunk = true;
    }
  }
}

export { Ship };
