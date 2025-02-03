export function nextGeneration() {
  const field: Array<number> = [0, 0, 0, 0, 1, 0, 1, 1, 1];
  console.log(getLifeCell(8, field, 9));
}

function getLifeCell(x: number, field: Array<number>, size: number) {
  const sizeRow = Math.pow(size, 0.5); //3
  // let lifeCell = getCellValue(x-1,field,size)
  // +getCellValue(x+1,field,size) + getCellValue(x-sizeRow,field,size)
  // + getCellValue(x+sizeRow,field,size) + getCellValue(x-sizeRow-1,field,size)
  // + getCellValue(x-sizeRow+1,field,size) + getCellValue(x+sizeRow+1,field,size)
  // + getCellValue(x+sizeRow-1,field,size);
  console.log(getCellValue(x - sizeRow + 1, field, size));
  // return lifeCell;
}

function getCellValue(x: number, field: Array<number>, size: number) {
  console.log(x);
  if (x > 0 && x < size) return field[x];
  return 0;
}
