const KNIGHT_MOVES = [
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

export default class Tile {
  constructor(position, parent) {
    this.position = position;
    this.moves = [];
    this.parent = parent || null;
  }

  getPosition() {
    return `[${this.position[0]},${this.position[1]}]`;
  }

  createMoves() {
    const x = this.position[0];
    const y = this.position[1];

    KNIGHT_MOVES.forEach((move) => {
      if (
        x + move[0] >= 0 &&
        x + move[0] < 8 &&
        y + move[1] >= 0 &&
        y + move[1] < 8
      ) {
        const position = [x + move[0], y + move[1]];
        const tile = new Tile(position, this);
        this.moves.push(tile);
      }
    });
  }
}
