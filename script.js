function createGridContainer(rows, columns) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    gridContainer.id = "gridContainer";
    document.body.appendChild(gridContainer);
    console.log("Added container");
}

createGridContainer();