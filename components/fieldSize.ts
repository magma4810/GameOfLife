import "../styles/fieldSize.css";
import { cellField } from "./cellField";

export function fieldSize(div: HTMLHeadElement, grid: HTMLDivElement) {
  const fieldSize: HTMLDivElement = document.createElement("div");
  const plusSize: HTMLButtonElement = document.createElement("button");
  const minusSize: HTMLButtonElement = document.createElement("button");
  const fieldContainer: HTMLDivElement = document.createElement("div");
  let size: number = 10;
  let sizePx: number = 50;

  plusSize.textContent = "+";
  minusSize.textContent = "-";
  plusSize.className = "buttonSize";
  minusSize.className = "buttonSize";
  fieldSize.textContent = `${size}`;
  fieldSize.className = "fieldSize";
  fieldContainer.className = "fieldContainer";

  fieldContainer.append(minusSize);
  fieldContainer.append(fieldSize);
  fieldContainer.append(plusSize);

  const cell: HTMLDivElement | null = document.querySelector(".cell");

  plusSize.addEventListener("click", () => {
    if (grid && cell) {
      grid.textContent = "";
      if (size < 70) {
        if (size < 20) {
          sizePx -= 1.5;
        } else if (size <= 35) {
          sizePx -= 0.8;
        } else {
          sizePx -= 0.1;
        }
        fieldSize.textContent = `${++size}`;
        grid.style.gridTemplateRows = `repeat(${size}, ${sizePx}px)`;
        grid.style.gridTemplateColumns = `repeat(${size}, ${sizePx}px)`;
        cell.style.width = `${sizePx}px`;
        cell.style.height = `${sizePx}px`;
      } else {
        fieldSize.textContent = `MAX SIZE 60`;
      }
      cellField(grid, size * size);
    }
  });
  minusSize.addEventListener("click", () => {
    if (size > 0) {
      fieldSize.textContent = `${--size}`;
      if (grid) {
        grid.textContent = "";
        grid.style.gridTemplateColumns = `repeat(${size}, 50px)`;
        grid.style.gridTemplateRows = `repeat(${size}, 50px)`;
        cellField(grid, size * size);
      }
    }
  });

  div.append(fieldContainer);
}
