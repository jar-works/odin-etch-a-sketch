const gridContainer = createGridContainer(16, 16);
createGridItems(16, 16);

function createGridContainer(rows, columns) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    gridContainer.id = "gridContainer";

    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    gridContainer.style.width = "400px";
    gridContainer.style.height = "auto";

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
        gridItem.style.border = "solid 1px black";
        gridItem.style.width = "50px";
        gridItem.style.height = "50px";

        gridContainer.appendChild(gridItem);
    }
}