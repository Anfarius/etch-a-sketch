function paint () {
    this.style.backgroundColor = color;
}

function createCanvas (blocksPerSide) {
    const canvas = document.querySelector(".canvas");
    let numOfBlocks = blocksPerSide * blocksPerSide;
    let size = 480 / blocksPerSide;

    for (let i = 0; i < numOfBlocks; i++) {
        const gridBlock = document.createElement("div");
        gridBlock.style.boxSizing = "border-box";
        gridBlock.style.border = "1px dashed rgba(0, 0, 0, 0.2)";
        gridBlock.style.height = `${size}px`;
        gridBlock.style.width = `${size}px`;
        gridBlock.addEventListener("mouseover", paint);
        canvas.appendChild(gridBlock);
    }
}

const colorPicker = document.querySelector("#color-picker");
let color = "black";

colorPicker.addEventListener("change", (e) => {
    color = e.target.value;
});

createCanvas(16);