import { cellField } from "../components/cellField";
import { fieldSize } from "../components/fieldSize";
export function sum(x1: number, x2: number): number {
  return x1 + x2;
}

function main() {
  const mainHtmlElement: HTMLDivElement = document.createElement("div");
  const grid: HTMLDivElement = document.createElement("div");
  const size: number = 10;
  mainHtmlElement.className = "mainHtmlElement";
  grid.className = "grid";
  mainHtmlElement.append(grid);
  document.body.append(mainHtmlElement);
  cellField(grid, size * size);
  fieldSize(mainHtmlElement);
}

main();
