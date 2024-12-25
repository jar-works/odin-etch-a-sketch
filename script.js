const gridContainerSize = 900;
const gridContainer = createGridContainer();
createGridItems(50, 50);

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

    let divsCreated = [];
    const gridSize = rows * columns;
    const gridItemSize = gridContainerSize / rows;

    for (let i = 0; i < gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        // Dynamic size option
        gridItem.style.width = gridItemSize + "px";
        gridItem.style.height = gridItemSize + "px";

        gridContainer.appendChild(gridItem);
        divsCreated[i] = gridItem;
    }

    addHoverEffectToDivs(divsCreated);
}

function addHoverEffectToDivs(divs = []) {
    divs.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "red";
        });

        // Not needed in specifications (afterall)
        // element.addEventListener("mouseleave", () => {
        //     element.style.backgroundColor = "";
        // });
    });
}