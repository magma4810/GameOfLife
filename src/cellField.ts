import "../styles/cellField.css";

export function cellField(
  div: HTMLDivElement,
  size: number,
  array: Array<number[]>,
) {
  for (let i: number = 0; i < size; i++) {
    for (let j: number = 0; j < size; j++) {
      const cell: HTMLDivElement = document.createElement("div");
      cell.className = "cell";
      cell.dataset.index = `${i},${j}`; // Сохраняем индекс клетки в data-атрибуте

      cell.addEventListener("click", () => {
        const index = cell.dataset.index?.split(","); // Получаем индекс клетки
        if (index) {
          const x = Number(index[0]);
          const y = Number(index[1]);
          console.log(x, " ", y);
          if (index && array[x][y] === 0) {
            // Проверяем текущее значение
            array[x][y] = 1; // Меняем значение на 1
            cell.classList.add("active"); // Добавляем класс для визуального отображения
          }
        }
        console.log(array); // Выводим массив для проверки
      });

      div.appendChild(cell);
    }
  }
}
