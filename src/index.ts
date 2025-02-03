import { cellField } from "./cellField";
import { header } from "./header";
import { nextGeneration } from "./nextGeneration";
import { start } from "./start";
export function sum(x1: number, x2: number): number {
  return x1 + x2;
}

function main() {
  const grid: HTMLDivElement = document.createElement("div");
  const headerHtml: HTMLHeadElement = document.createElement("header");
  const size: number = 10;
  let field: number[][] = Array.from({ length: size }, () =>
    Array(size).fill(0),
  );
  let gameIsRunning = false;
  grid.className = "grid";
  document.body.append(headerHtml);
  document.body.append(grid);
  cellField(grid, size, field);
  header(headerHtml, grid, size);
  // Передаем функцию для изменения gameIsRunning
  start((value: boolean) => {
    gameIsRunning = value;
  });
  setInterval(() => {
    console.log(gameIsRunning);
    if (gameIsRunning) {
      field = nextGeneration(field, size);
      cellField(grid, size, field);
    }
  }, 1000);
}

main();
