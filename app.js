const canvas = document.querySelector(".canvas");
const showGridBtn = document.querySelector("#show-grid");
const rainbowModeBtn = document.querySelector("#rainbow");

function paint () {
    this.style.backgroundColor = color;
}

function rainbowPaint () {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = `#${randomColor}`;
}

function createCanvas (blocksPerSide) {
    let numOfBlocks = blocksPerSide * blocksPerSide;
    let size = 480 / blocksPerSide;

    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }

    for (let i = 0; i < numOfBlocks; i++) {
        const gridBlock = document.createElement("div");
        gridBlock.style.boxSizing = "border-box";
        if (showGridBtn.classList.contains("on")) {
            gridBlock.classList.add("grid-border");
        }
        gridBlock.style.height = `${size}px`;
        gridBlock.style.width = `${size}px`;
        gridBlock.style.background = "white";
        if (rainbowModeBtn.classList.contains("on")) {
            gridBlock.addEventListener("mouseover", rainbowPaint);
        } else {
            gridBlock.addEventListener("mouseover", paint);
        }
        canvas.appendChild(gridBlock);
    }
}

const colorPicker = document.querySelector("#color-picker");
let color = colorPicker.value;

colorPicker.addEventListener("change", (e) => {
    color = e.target.value;
});

createCanvas(16);

// add event which changes the displayed text of a field to reflect the changed
// value of the range slider

const rangeSlider = document.querySelector("#canvas-size-range");
const rangeText = document.querySelector("#range-text");
rangeSlider.addEventListener("input", changeCanvasText);
rangeSlider.addEventListener("change", changeCanvasSize);

function changeCanvasText () {
    let rangeValue = rangeSlider.value;
    rangeText.textContent = `${rangeValue} x ${rangeValue}`;
}

function changeCanvasSize () {
    let rangeValue = rangeSlider.value;
    createCanvas(rangeValue);
}

// add function to Show Grid button

showGridBtn.addEventListener("click", showGrid);

function showGrid () {
    let grid = canvas.childNodes;
    if (showGridBtn.classList.contains("on")) {
        showGridBtn.classList.remove("on");
        for (let i = 0; i < grid.length; i++) {
            grid[i].classList.remove("grid-border");
        }
        
    } else {
        showGridBtn.classList.add("on");
        for (let i = 0; i < grid.length; i++) {
            grid[i].classList.add("grid-border");
        }
    }
}

// add functionality to the Clear Canvas button

const clearCanvasBtn = document.querySelector("#clear");
clearCanvasBtn.addEventListener("click", clearCanvas);

function clearCanvas () {
    let grid = canvas.childNodes;
    for (let i = 0; i < grid.length; i++) {
        grid[i].style.background = "white";
    }
}

// add functionality to the Rainbow Mode button

rainbowModeBtn.addEventListener("click", enterRainbowMode);

function enterRainbowMode () {
    let grid = canvas.childNodes;
    if (rainbowModeBtn.classList.contains("on")) {
        rainbowModeBtn.classList.remove("on");
        for (let i = 0; i < grid.length; i++) {
            grid[i].removeEventListener("mouseover", rainbowPaint);
            grid[i].addEventListener("mouseover", paint);
        }
        
    } else {
        rainbowModeBtn.classList.add("on");
        for (let i = 0; i < grid.length; i++) {
            grid[i].removeEventListener("mouseover", paint);
            grid[i].addEventListener("mouseover", rainbowPaint);
        }
    }
}
