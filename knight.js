import Tile from "./tile.js";

export default function knightMoves(start, end) {
  const startTile = new Tile(start);
  end = `[${end}]`;

  const queue = [startTile];
  const visited = new Map();
  const path = [];

  while (queue.length > 0) {
    const tile = queue.shift();

    if (tile.getPosition() === end) {
      path.push(tile);
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

  let pathTile = path[0];
  path.pop();
  while (pathTile != null) {
    path.unshift(pathTile.getPosition());
    pathTile = pathTile.parent;
  }

  console.log(`You made it in ${path.length} moves! Here's your path:`);
  path.forEach((item) => {
    console.log(item);
  });
}
