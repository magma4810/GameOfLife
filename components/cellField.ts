import "../styles/cellField.css";

export function cellField(div: HTMLDivElement, size: number) {
  for (let i: number = 0; i < size; i++) {
    const cell: HTMLDivElement = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("click", () => cell.classList.toggle("active"));
    div.appendChild(cell);
  }
}
