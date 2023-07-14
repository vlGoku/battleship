import { createTag } from "./functions";
import { Gameboard } from "./gameboard";

class GUIGameboard {
  constructor(size, player) {
    this.player = player;
    this.size = size;
    this.main = document.querySelector("#app");
    this.container = document.createElement("section");
    this.field = document.createElement("div");
    this.createBoard();
  }

  createBoard() {
    let gameboardSize = this.size * this.size;
    const player = document.createElement("h2");
    player.id = "playerHeader";
    player.textContent = this.player;
    this.container.appendChild(player);
    for (let i = 0; i < gameboardSize; i++) {
      const div = document.createElement("div");
      div.dataset.x = i;
      div.style.border = "2px solid black";
      div.style.height = "50px";
      div.className = "box";
      this.field.className = "field";
      this.field.appendChild(div);
      this.container.appendChild(this.field);
    }
  }
}

function createGameDisplay() {
  const header = createTag(document.body, "h1", "title", "title", "Battleship");
  document.body.insertAdjacentElement("afterbegin", header);
}

function listener() {
  const boxes = document.querySelectorAll(".box");

  for (const box of boxes) {
    box.addEventListener("click", (e) => {
      let x = e.target.dataset.x;
      let y = e.target.dataset.x;
      y = (y / 10 - Math.floor(y / 10)) * 10;
      x = Math.floor(x / 10);
      console.log(y);
    });
  }
}

const gameboardPlayer = new Gameboard();
gameboardPlayer.createGameboard();
const uiGameboardPlayer = new GUIGameboard(10, "Marko");
const uiGameboardKI = new GUIGameboard(10, "KI");
createGameDisplay();
const main = document.querySelector("#app");
main.appendChild(uiGameboardPlayer.container);
main.appendChild(uiGameboardKI.container);
listener();

export { GUIGameboard };
