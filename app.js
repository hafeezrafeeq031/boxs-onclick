let activeshape = "";
let activeColor = "";
let previousShape = null;

function selectedColor(div) {
    if (previousShape !== null) previousShape.style.background = "transparent";
    if (activeshape !== "") activeshape = "";
    div.style.border = "3px solid green";
    activeColor = div.id;
}

function selectedShape(div) {
    if (previousShape) {
        previousShape.style.backgroundColor = "transparent";
    }
    activeshape = div.id;
    div.style.backgroundColor = "orange";
    previousShape = div;
}

function drawShape(div, event) {
    if (activeshape == "" && activeColor == "") {
        // Swal.fire("Please select any shape");
        // return;
        alert("please selected Shape")
    }

    console.log(event.x,event.y)

    if (activeshape != "") {
        var bg = `rgba(${color()}, ${color()}, ${color()}, 0.5)`;

        div.innerHTML += `<div
            onclick="changeColor(this)"
            class=" ${activeshape}"
            style="
                position: absolute;
                top: ${event.y}px;
                left: ${event.x}px;
                background-color: ${bg};
                width: 50px;
                height: 50px;"
        ></div>`;
    }
}

function color() {
    return Math.round(Math.random() * 255);
}

function changeColor(div) {
    div.style.backgroundColor = activeColor;
}