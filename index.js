const container = document.querySelector(".container")
// const grid = document.createElement("div");
// container.appendChild(grid);

// create a function to make desired grid
function makeGrid(rows, columns) {
        container.style.setProperty("--grid-rows", rows);
        container.style.setProperty("--grid-columns", columns);
        for (let i = 0; i < (rows * columns); i++ ) {
                let box = document.createElement("div");
                container.appendChild(box).className = "grid-box";
        }
}

makeGrid(16, 16);