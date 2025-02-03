import { fieldSize } from "./fieldSize";
import "../styles/header.css";

export function header(
  header: HTMLHeadElement,
  grid: HTMLDivElement,
  size: number,
) {
  fieldSize(header, grid, size);
}
