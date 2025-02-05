import { cellField } from "./cellField";
import { initialStart } from "./start";
import { fieldSize } from "./fieldSize";
import { isAnyoneAlive } from "./isAnyoneAlive";
import { nextGeneration } from "./nextGeneration";

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
  initialStart();

  const startButton = document.querySelector(".startButton");

  if (startButton)
    startButton.addEventListener("click", () => {
      gameIsRunning = !gameIsRunning;
      const timer = setInterval(() => {
        if (gameIsRunning) {
          if (isAnyoneAlive(field)) {
            field = nextGeneration(field, size);
            cellField(grid, size, field);
            startButton.textContent = "STOP";
            gameIsRunning = true;
          } else {
            clearInterval(timer);
            if (startButton) startButton.textContent = "START";
            gameIsRunning = false;
          }
        } else {
          startButton.textContent = "START";
          gameIsRunning = false;
          clearInterval(timer);
        }
      }, 1000);
    });
}

main();
