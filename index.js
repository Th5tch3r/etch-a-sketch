let defaultSize = 16;

const container = document.querySelector(".container");
const sizeSlider = document.querySelector("#sizeSlider");
const sizeValue = document.querySelector("#sizeValue");

function setGrid(value) {
        container.innerHTML = "";
        makeGrid(value);
}

function updateSizeValue(value) {
        sizeValue.innerHTML = `${value} x ${value}`;
}

sizeSlider.onchange = (e) => setGrid(e.target.value);
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);


// create a function to make desired grid, adding drawing effect in as well
function makeGrid(size) {
        container.style.setProperty("--grid-rows", size);
        container.style.setProperty("--grid-columns", size);
        let mouseEvent = {};
        
        container.addEventListener("mousedown", () => mouseEvent.mouseDown = true);
        container.addEventListener("mouseup", () => delete mouseEvent.mouseDown);

        function canDraw() {
                return mouseEvent.mouseDown;
        }

        function draw(e) {
                if (canDraw()) {
                e.fromElement.classList.add("black");
                }
        }

        for (let i = 0; i < (size * size); i++ ) {
                let box = document.createElement("div");
                container.appendChild(box).className = "grid-box";
                box.addEventListener("mouseover", draw);

        }
        
}

window.onload = () => {
        makeGrid(defaultSize);
}

// Reset button
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
        window.location.reload();
})

