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

makeGrid(20, 20);

// create hover effect for grid-box using object, allowing the state of the object
// to be temporarily stored
const grids = document.querySelectorAll(".grid-box");
let mouseEvent = {};

grids.forEach(grid => {
        grid.addEventListener("mouseover", draw);
})

container.addEventListener("mousedown", () => mouseEvent.mouseDown = true);
container.addEventListener("mouseup", () => delete mouseEvent.mouseDown);

// create function to check if the mouse event is still occurring
function canDraw() {
        return mouseEvent.mouseDown;
}

function draw(e) {
        if (canDraw()) {
        e.fromElement.classList.add("black");
        }
}

