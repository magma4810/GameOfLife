import { cellField } from "./cellField";
import { initialStart, startGame } from "./start";
import { fieldSize } from "./fieldSize";

import "../styles/header.css";
export function sum(x1: number, x2: number): number {
  return x1 + x2;
}

function main() {
  const grid: HTMLDivElement = document.createElement("div");
  const headerHtml: HTMLHeadElement = document.createElement("header");
  let size: number = 10;
  let field: number[][] = Array.from({ length: size }, () =>
    Array(size).fill(0),
  );
  let gameIsRunning: boolean = false;
  grid.className = "grid";
  document.body.append(headerHtml);
  document.body.append(grid);
  cellField(grid, size, field);
  fieldSize(headerHtml, grid, size, field, (newSize, newField) => {
    size = newSize;
    field = newField;
  });
  initialStart((newGameIsRunning: boolean) => {
    gameIsRunning = newGameIsRunning;
    if (gameIsRunning) {
      startGame(field, size, grid, (isRunning) => {
        gameIsRunning = isRunning;
      });
    }
  });
}

main();
