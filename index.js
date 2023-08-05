let defaultSize = 16;

const container = document.querySelector(".container");
const sizeSlider = document.querySelector("#sizeSlider");
const sizeValue = document.querySelector("#sizeValue");

function setGrid(value) {
        container.innerHTML = "";
        makeGrid(value);
}
window.onload = () => {
        makeGrid(defaultSize);
}

sizeSlider.onchange = (e) => setGrid(e.target.value);

// create a function to make desired grid
function makeGrid(size) {
        container.style.setProperty("--grid-rows", size);
        container.style.setProperty("--grid-columns", size);
        for (let i = 0; i < (size * size); i++ ) {
                let box = document.createElement("div");
                container.appendChild(box).className = "grid-box";
                box.addEventListener("mousedown", () => {box.className = "black"});

        }
        
}


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
