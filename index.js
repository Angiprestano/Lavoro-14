/* */
const createTable = function () {
  const numberTb = document.getElementById("Tomb");
  for (let i = 0; i < 76; i++) {
    const numberCells = document.createElement("div");
    numberCells.classList.add("tableNumber");
    const number = document.createElement("div");
    numberCells.classList.add("numberTb");
    number.innerText = i + 1;
    numberCells.appendChild(number);
    numberTb.appendChild(numberCells);
  }
};

createTable();

const buttonSelected = function () {
  const alltheNumber = document.getElementById("button");
  alltheNumberArray = array.from(alltheNumber);
  alltheNumberArray.array.forEach((button) => {
    button.classList.remove("selected");
  });
};
buttonSelected();
