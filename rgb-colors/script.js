var greenIn = document.getElementById("greenin");
var blueIn = document.getElementById("bluein");
var redIn = document.getElementById("redin");
var displayIn = document.getElementById("display").value;
var blackbtn = document.getElementById("black");
var whitebtn = document.getElementById("white");
var widthIn = document.getElementById("width");
var heightIn = document.getElementById("height");

widthIn.addEventListener("change", changeSize);
heightIn.addEventListener("change", changeSize);

blueIn.addEventListener("input", btnClicked);
redIn.addEventListener("input", btnClicked);
greenIn.addEventListener("input", btnClicked);
blackbtn.addEventListener("click", shadeClicked);
whitebtn.addEventListener("click", creamClicked);

function changeSize() {
  var widthV = +widthIn.value;
  var heightV = +heightIn.value;

  if (heightV < 50) {
    heightV = 50;
    heightV.value = 0;
  } else if (heightV > 200) {
    heightV = 200;
    heightV.value = 200;
  }

  if (widthV < 50) {
    widthV = 50;
    widthV.value = 0;
  } else if (widthV > 400) {
    widthV = 400;
    widthV.value = 400;
  }
  var heightOut = `${heightV}px`;
  var widthOut = `${widthV}px`;

  document.getElementById("display").style.width = widthOut;
  document.getElementById("display").style.height = heightOut;
}

function creamClicked() {
  document.getElementById("display").style.background = "rgb(255, 255, 255)";
}

function shadeClicked() {
  document.getElementById("display").style.background = "rgb(0, 0, 0)";
}

function btnClicked() {
  var greenV = +greenIn.value;
  var blueV = +blueIn.value;
  var redV = +blueIn.value;

  if (redV < 0) {
    redV = 0;
    redV.value = 0;
  } else if (redV > 255) {
    redV = 255;
    redV.value = 255;
  }

  if (greenV < 0) {
    greenV = 0;
    greenV.value = 0;
  } else if (greenV > 255) {
    greenV = 255;
    greenV.value = 255;
  }

  if (blueV < 0) {
    blueV = 0;
    blueV.value = 0;
  } else if (blueV > 255) {
    blueV = 255;
    blueV.value = 255;
  }

  var output = `rgb(${redV}, ${greenV}, ${blueV})`;
  document.getElementById("display").style.background = output;
  console.log(output);
}
