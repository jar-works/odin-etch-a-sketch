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
    console.log("Added container");
}

createGridContainer();