const gridContainer = createGridContainer();
createGridItems(16, 16);

function createGridContainer() {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    gridContainer.id = "gridContainer";

    document.body.appendChild(gridContainer);
    return gridContainer;
}

function createGridItems(rows, columns) {
    if (gridContainer === null) {
        console.log("There is no grid container created.");
        return;
    }

    for (let i = 0; i < rows * columns; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        gridContainer.appendChild(gridItem);
    }
}