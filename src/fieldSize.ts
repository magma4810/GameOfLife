import { cellField } from "./cellField";

export function fieldSize(
  div: HTMLHeadElement,
  grid: HTMLDivElement,
  setSize: (value: number) => void,
  size: number,
  setField: (newField: Array<number[]>) => void,
  field: Array<number[]>,
) {
  const fieldSize: HTMLDivElement = document.createElement("div");
  const plusSize: HTMLButtonElement = document.createElement("button");
  const minusSize: HTMLButtonElement = document.createElement("button");
  const headerContainer: HTMLDivElement = document.createElement("div");
  let sizePx: number = 50;

  plusSize.textContent = "+";
  minusSize.textContent = "-";
  plusSize.className = "header";
  minusSize.className = "header";
  fieldSize.textContent = `${size}`;
  fieldSize.className = "fieldSize";
  headerContainer.className = "headerContainer";

  headerContainer.append(minusSize);
  headerContainer.append(fieldSize);
  headerContainer.append(plusSize);

  const cell: HTMLDivElement | null = document.querySelector(".cell");

  plusSize.addEventListener("click", () => {
    size++;
    setSize(size);
    field = Array.from({ length: size }, () => Array(size).fill(0));
    setField(field);
    grid.textContent = "";
    if (grid && cell) {
      if (size < 70) {
        if (size < 20) {
          sizePx -= 1.5;
        } else if (size <= 35) {
          sizePx -= 0.8;
        } else {
          sizePx -= 0.1;
        }
        fieldSize.textContent = `${size}`;
        grid.style.gridTemplateRows = `repeat(${size}, ${sizePx}px)`;
        grid.style.gridTemplateColumns = `repeat(${size}, ${sizePx}px)`;
        cell.style.width = `${sizePx}px`;
        cell.style.height = `${sizePx}px`;
      } else {
        fieldSize.textContent = `MAX SIZE 60`;
      }
      cellField(grid, size, field);
    }
  });
  minusSize.addEventListener("click", () => {
    size--;
    field = Array.from({ length: size }, () => Array(size).fill(0));
    setField(field);
    grid.textContent = "";
    if (grid && cell) {
      if (size < 70) {
        if (size < 20) {
          sizePx += 1.5;
        } else if (size <= 35) {
          sizePx += 0.8;
        } else {
          sizePx += 0.1;
        }
        fieldSize.textContent = `${size}`;
        grid.style.gridTemplateRows = `repeat(${size}, ${sizePx}px)`;
        grid.style.gridTemplateColumns = `repeat(${size}, ${sizePx}px)`;
        cell.style.width = `${sizePx}px`;
        cell.style.height = `${sizePx}px`;
      } else {
        fieldSize.textContent = `MAX SIZE 60`;
      }
      cellField(grid, size, field);
    }
  });

  div.append(headerContainer);
}
