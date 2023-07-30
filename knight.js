import Tile from "./tile.js";

export default function knightMoves(start, end) {
  const startTile = new Tile(start);
  end = `[${end}]`;

  const queue = [startTile];
  const visited = new Map();
  const path = [];

  let pathTile = "";

  let i = 0;
  while (queue.length > 0) {
    const tile = queue.shift();

    if (tile.getPosition() === end) {
      pathTile = tile;
      break;
    }

    tile.createMoves();

    visited.set(tile.getPosition(), tile);

    tile.moves.forEach((move) => {
      if (!visited.has(move.getPosition())) {
        queue.push(move);
        visited.set(move.getPosition(), move);
      }
    });
  }

  while (pathTile != null) {
    path.unshift(pathTile.getPosition());
    pathTile = pathTile.parent;
  }
}
