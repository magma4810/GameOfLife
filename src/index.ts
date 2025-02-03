import { cellField } from "./cellField";
import { nextGeneration } from "./nextGeneration";
import { start } from "./start";
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
  let gameIsRunning = false;
  grid.className = "grid";
  document.body.append(headerHtml);
  document.body.append(grid);
  cellField(grid, size, field);
  fieldSize(
    headerHtml,
    grid,
    (value: number) => {
      size = value;
    },
    size,
    (newField: Array<number[]>) => {
      field = newField;
    },
    field,
  );
  start((value: boolean) => {
    gameIsRunning = value;
  });
  setInterval(() => {
    console.log(size);
    console.log(gameIsRunning);
    console.log(field);
    if (gameIsRunning) {
      field = nextGeneration(field, size);
      cellField(grid, size, field);
    }
  }, 1000);
}

main();
