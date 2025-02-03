import { fieldSize } from "./fieldSize";

export function header(
  header: HTMLHeadElement,
  grid: HTMLDivElement,
  field: Array<number[]>,
): Array<number[]> {
  field = fieldSize(header, grid, field);
  return field;
}
