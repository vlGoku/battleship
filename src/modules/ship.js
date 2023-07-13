"use strict";
import { Gameboard } from "./gameboard";

class Ship {
  constructor(name, length, number) {
    this.name = name;
    this.length = length;
    this.isSunk = false;
    this.timesHit = 0;
    this.shipNumber = number;
  }

  shipLength() {
    return this.length;
  }

  hit() {
    return this.timesHit;
  }

  shipIsSunk() {
    if (this.length === this.timesHit) {
      this.isSunk = true;
    }
  }
}

export { Ship };
