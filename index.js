const container = document.querySelector(".container")

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

// create hover effect for grid-box
const grids = document.querySelectorAll(".grid-box");

grids.forEach(grid => {
        grid.addEventListener("mousedown", function() {
                grid.classList.add("black");
        })
})