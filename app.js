


let activeshape = "";
let activeColor = "";
let previousShape = null;
let previousColorDiv = null;

// Called when a color div is clicked
function selectedColor(div) {
    // Remove border from previous selection
    if (previousColorDiv !== null) {
        previousColorDiv.style.border = "none";
    }

    // Set new active color and add border to selected color
    activeColor = div.style.backgroundColor; // Use actual color
    div.style.border = "3px solid lightgreen";
    previousColorDiv = div;
}

// Called when a shape div is clicked
function selectedShape(div) {
    // Remove highlight from previous shape
    if (previousShape !== null) {
        previousShape.style.backgroundColor = "transparent";
    }

    activeshape = div.dataset.shape; // use data-shape for clarity
    div.style.backgroundColor = "lightgreen"; // highlight selected shape
    previousShape = div;
}

// Draw the selected shape at click position
function drawShape(container, event) {
    if (!activeshape || !activeColor) {
        alert("Please select a shape and color");
        return;
    }

    const shapeDiv = document.createElement("div");
    shapeDiv.className = activeshape;

    shapeDiv.style.position = "absolute";
    shapeDiv.style.top = `${event.clientY}px`;
    shapeDiv.style.left = `${event.clientX}px`;
    shapeDiv.style.backgroundColor = activeColor;
    shapeDiv.style.width = "50px";
    shapeDiv.style.height = "50px";

    // Apply shape styles
    if (activeshape === "circle") {
        shapeDiv.style.borderRadius = "50%";
    } else if (activeshape === "square") {
        shapeDiv.style.borderRadius = "0";
    }

    shapeDiv.onclick = function () {
        changeColor(shapeDiv);
    };

    container.appendChild(shapeDiv);
}

// Change shape's color when clicked
function changeColor(div) {
    div.style.backgroundColor = activeColor;
}


















