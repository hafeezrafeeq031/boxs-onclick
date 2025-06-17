let activeshape = "";
let activeColor = "";
let previousShape = null;
let previousColorDiv = null;

function selectedColor(div) {
  // Remove previous selection
  if (previousColorDiv !== null) {
    previousColorDiv.style.border = "2px solid transparent";
  }

  // Highlight new color
  div.style.border = "3px solid lightgreen";
  activeColor = div.style.backgroundColor;
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
  if (activeshape === "" || activeColor === "") {
    alert("Please select a shape and color");
    return;
  }

  const shapeDiv = document.createElement("div");
  shapeDiv.className = activeshape;

  // Set shape position
  shapeDiv.style.top = event.offsetY + "px";
  shapeDiv.style.left = event.offsetX + "px";

  // Apply color (except for triangle which uses border)
  if (activeshape === "triangle") {
    shapeDiv.style.borderBottomColor = activeColor;
  } else {
    shapeDiv.style.backgroundColor = activeColor;
  }

  shapeDiv.onclick = function (e) {
    e.stopPropagation(); // Prevent drawing again on shape click
    changeColor(shapeDiv);
  };

  container.appendChild(shapeDiv);
}

function changeColor(div) {
  if (div.className === "triangle") {
    div.style.borderBottomColor = activeColor;
  } else {
    div.style.backgroundColor = activeColor;
  }
}
