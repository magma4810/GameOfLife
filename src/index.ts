import { cellField } from "../components/cellField";
import { header } from "../components/header";
export function sum(x1: number, x2: number): number {
  return x1 + x2;
}

function main() {
  const grid: HTMLDivElement = document.createElement("div");
  const headerHtml: HTMLHeadElement = document.createElement("header");
  const size: number = 10;

  grid.className = "grid";

  document.body.append(headerHtml);
  document.body.append(grid);

  cellField(grid, size * size);
  header(headerHtml, grid);
}

main();
