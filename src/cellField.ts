import "../styles/cellField.css";

export function cellField(
  div: HTMLDivElement,
  size: number,
  array: Array<number[]>,
) {
  div.textContent = "";
  for (let i: number = 0; i < size; i++) {
    for (let j: number = 0; j < size; j++) {
      const cell: HTMLDivElement = document.createElement("div");
      cell.className = "cell";
      cell.dataset.index = `${i},${j}`;
      if (array[i][j] === 1) {
        cell.classList.add("active");
        console.log("active");
      }
      cell.addEventListener("click", () => {
        const index = cell.dataset.index?.split(",");
        if (index) {
          const x = Number(index[0]);
          const y = Number(index[1]);
          if (index && array[x][y] === 0) {
            array[x][y] = 1;
            cell.classList.add("active");
          }
        }
      });

      div.appendChild(cell);
    }
  }
}
