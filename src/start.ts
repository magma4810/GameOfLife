import { nextGeneration } from "./nextGeneration";
import { cellField } from "./cellField";
import { isAnyoneAlive } from "./isAnyoneAlive";

export function initialStart(
  updateGameIsRunning: (gameIsRunning: boolean) => void,
) {
  const startButton: HTMLButtonElement = document.createElement("button");
  const headerContainer: HTMLDivElement | null =
    document.querySelector(".headerContainer");
  startButton.textContent = "START";
  startButton.classList.add("header", "startButton");
  if (headerContainer) {
    headerContainer.appendChild(startButton);
  }
  startButton.addEventListener("click", () => {
    updateGameIsRunning(true);
  });
}
export function startGame(
  field: Array<number[]>,
  size: number,
  grid: HTMLDivElement,
  updateGameIsRunning: (isRunning: boolean) => void,
) {
  const startButton: HTMLButtonElement | null =
    document.querySelector(".startButton");
  if (startButton) startButton.textContent = "STOP";
  const timer = setInterval(() => {
    if (isAnyoneAlive(field)) {
      field = nextGeneration(field, size);
      cellField(grid, size, field);
    } else {
      clearInterval(timer);
      if (startButton) startButton.textContent = "START";
      updateGameIsRunning(false); // Устанавливаем gameIsRunning в false
    }
  }, 1000);
}
