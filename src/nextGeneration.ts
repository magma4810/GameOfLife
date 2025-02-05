export function nextGeneration(
  field: Array<number[]>,
  size: number,
): Array<number[]> {
  const newField: number[][] = Array.from({ length: size }, () =>
    Array(size).fill(0),
  );
  let lifeCell;
  for (let x = 0; x < field.length; x++) {
    for (let y = 0; y < field[0].length; y++) {
      lifeCell = getLifeCell(x, y, field, size);
      if (field[x][y] && (lifeCell === 2 || lifeCell === 3)) {
        newField[x][y] = 1;
      } else {
        if (lifeCell === 3) {
          newField[x][y] = 1;
        }
      }
    }
  }

  return newField;
}

function getLifeCell(
  x: number,
  y: number,
  field: Array<number[]>,
  size: number,
): number {
  const lifeCell =
    getCellValue(x + 1, y, field, size) +
    getCellValue(x - 1, y, field, size) +
    getCellValue(x, y - 1, field, size) +
    getCellValue(x - 1, y - 1, field, size) +
    getCellValue(x + 1, y - 1, field, size) +
    getCellValue(x, y + 1, field, size) +
    getCellValue(x - 1, y + 1, field, size) +
    getCellValue(x + 1, y + 1, field, size);

  return lifeCell;
}

function getCellValue(
  x: number,
  y: number,
  field: Array<number[]>,
  size: number,
): number {
  if (x >= 0 && x < size && y < size && y >= 0) return field[x][y];
  return 0;
}
