


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


    activeColor = div.style.backgroundColor
    div.style.border = "3px solid lightgreen";
    previousColorDiv = div;
}


function selectedShape(div) {

    if (previousShape !== null) {
        previousShape.style.backgroundColor = "transparent";
    }

    activeshape = div.dataset.shape;
    div.style.backgroundColor = "lightgreen";
    previousShape = div;
}


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

function changeColor(div) {
    div.style.backgroundColor = activeColor;
}


















