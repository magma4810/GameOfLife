import "../styles/fieldSize.css";
import { cellField } from "./cellField";

export function fieldSize(div: HTMLDivElement) {
  const fieldSize: HTMLDivElement = document.createElement("div");
  const plusSize: HTMLButtonElement = document.createElement("button");
  const minusSize: HTMLButtonElement = document.createElement("button");
  const fieldContainer: HTMLDivElement = document.createElement("div");
  let size: number = 10;

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

  const grid: HTMLDivElement | null = document.querySelector(".grid");

  plusSize.addEventListener("click", () => {
    fieldSize.textContent = `${++size}`;
    if (grid) {
      grid.textContent = "";
      grid.style.gridTemplateColumns = `repeat(${size}, 50px)`;
      grid.style.gridTemplateRows = `repeat(${size}, 50px)`;
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
