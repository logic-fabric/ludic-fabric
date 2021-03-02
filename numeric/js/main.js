"use strict";

class Game {
  constructor() {
    console.log(`Welcome to the JS of numeric - version ${this.version}`);
  }

  get version() {
    return "1.0.0";
  }
}

const game = new Game();
