export function start(setGameIsRunning: (value: boolean) => void) {
  const startButton: HTMLButtonElement = document.createElement("button");
  const headerContainer: HTMLDivElement | null =
    document.querySelector(".headerContainer");
  startButton.textContent = "START";
  startButton.classList.add("header", "startButton");
  if (headerContainer) {
    headerContainer.appendChild(startButton);
  }
  startButton.addEventListener("click", () => {
    setGameIsRunning(true);
  });
}
