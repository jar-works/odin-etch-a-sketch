const gridContainerSize = 900;
const gridContainer = createGridContainer();
let currentGridDivs = [];
createGridItems(16, 16);

function createGridContainer() {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    gridContainer.id = "gridContainer";

    gridContainer.style.width = gridContainerSize + "px";

    document.body.appendChild(gridContainer);
    return gridContainer;
}

function createGridItems(rows, columns) {
    if (gridContainer === null) {
        console.log("There is no grid container created.");
        return;
    }

    const gridSize = rows * columns;
    const gridItemSize = gridContainerSize / rows;

    for (let i = 0; i < gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        // Dynamic size option
        gridItem.style.width = gridItemSize + "px";
        gridItem.style.height = gridItemSize + "px";

        gridContainer.appendChild(gridItem);
        currentGridDivs[i] = gridItem;
    }

    addHoverEffectToDivs(currentGridDivs);
}

function addHoverEffectToDivs(divs = []) {
    divs.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "red";
        });
    });
}

const customSizeButton = document.querySelector("#customSize");

customSizeButton.addEventListener("click", () => {
    let userInput = prompt("Enter custom size for new grid (less than 100)");
    if (userInput > 100) {
        userInput = 100;
    } else if (userInput == 0 || userInput == null) {
        return;
    }

    removeOldGrid();
    createGridItems(userInput, userInput);
})

function removeOldGrid() {
    currentGridDivs.forEach(gridItem => {
        gridItem.remove();
    })
}