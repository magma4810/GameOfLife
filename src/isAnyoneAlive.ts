export function isAnyoneAlive(field: Array<number[]>): boolean {
  for (let i: number = 0; i < field.length; i++) {
    for (let j: number = 0; j < field[0].length; j++) {
      if (field[i][j]) return true;
    }
  }
  return false;
}
