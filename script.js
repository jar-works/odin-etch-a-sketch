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

    let divsCreated = [];
    const size = rows * columns;

    for (let i = 0; i < size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

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

        element.addEventListener("mouseleave", () => {
            element.style.backgroundColor = "";
        });
    });
}