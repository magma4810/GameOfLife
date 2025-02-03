import { cellField } from "./cellField";
import { header } from "./header";
import { nextGeneration } from "./nextGeneration";
export function sum(x1: number, x2: number): number {
  return x1 + x2;
}

function main() {
  const grid: HTMLDivElement = document.createElement("div");
  const headerHtml: HTMLHeadElement = document.createElement("header");
  const size: number = 10;
  const field: number[][] = Array.from({ length: size }, () =>
    //???
    Array(size).fill(0),
  );
  grid.className = "grid";

  document.body.append(headerHtml);
  document.body.append(grid);

  cellField(grid, size, field);
  header(headerHtml, grid, field);
  nextGeneration();
}

main();
