// let activeshape = "";
// let activeColor = "";
// let previousShape = null;

// function selectedColor(div) {
//     if (previousShape !== null) previousShape.style.background = "transparent";
//     if (activeshape !== "") activeshape = "";
//     div.style.border = "3px solid lightgreen";
//     activeColor = div.id;
   
    
// }

// function selectedShape(div) {
//     if (previousShape) {
//         previousShape.style.backgroundColor = "transparent"
//        ;
//     }
//     activeshape = div.id;
//     console.log(activeshape)
//     div.style.backgroundColor = activeColor;
//     previousShape = div;
// }

// function drawShape(div, event) {
//     if (activeshape === "" || activeColor === "") {
//         alert("Please select a shape and color");
//         return;
//     }

//     console.log(event.clientX, event.clientY);

//     if (activeshape !== "") {
//         var bg = `rgba(${color()}, ${color()}, ${color()}, 0.5)`;
//         div.innerHTML += `<div
//             onclick="changeColor(this)"
//             class="${activeshape}"
//             style="
//                 position: absolute;
//                 top: ${event.clientY}px;
//                 left: ${event.clientX}px;
//                 background-color: ${bg};
//             ">
//         </div>`;
//     }
// }

// function color() {
//     return Math.round(Math.random() * 255);
// }

// function color() {
//     return Math.round(Math.random() * 255);
// }

// function changeColor(div) {
//     div.style.backgroundColor = activeColor;
// }





let activeshape = "";
let activeColor = "";
let previousShape = null;
let previousColorDiv = null;

function selectedColor(div) {
    // Remove border from previous color selection
    if (previousColorDiv !== null) {
        previousColorDiv.style.border = "none";
    }

    // Highlight newly selected color
    div.style.border = "3px solid lightgreen";
    activeColor = div.id;
    previousColorDiv = div;
}

function selectedShape(div) {
    // Remove highlight from previous shape
    if (previousShape !== null) {
        previousShape.style.backgroundColor = "transparent";
    }

    activeshape = div.id;
    div.style.backgroundColor = activeColor;
    previousShape = div;
}

function drawShape(container, event) {
    if (activeshape === "" || activeColor === "") {
        alert("Please select a shape and color");
        return;
    }

    const bg = `rgba(${color()}, ${color()}, ${color()}, 0.5)`;

    const shapeDiv = document.createElement("div");
    shapeDiv.className = activeshape;
    shapeDiv.style.cssText = `
        position: absolute;
        top: ${event.clientY}px;
        left: ${event.clientX}px;
        background-color: ${bg};
    `;
    shapeDiv.onclick = function () {
        changeColor(shapeDiv);
    };

    container.appendChild(shapeDiv);
}

function color() {
    return Math.round(Math.random() * 255);
}

function changeColor(div) {
    div.style.backgroundColor = activeColor;
}





















