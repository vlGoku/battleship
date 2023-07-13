class GUIGameboard {
  constructor(size) {
    this.size = size;
    this.container = document.createElement("section");
    this.createBoard();
  }

  createBoard() {
    let gameboardSize = this.size * this.size;
    for (let i = 0; i < gameboardSize; i++) {
      const div = document.createElement("div");
      div.id = "raster";
      this.container.appendChild(div);
    }
  }
}

const uiGameboard = new GUIGameboard(10);
const main = document.querySelector("#app");
main.appendChild(uiGameboard.container);

export { GUIGameboard };
