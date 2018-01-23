var colors = generateRandomColors(6);
var boxes = document.querySelectorAll(".box");
var pickedColor = pickNewColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var header = document.querySelector("header");
var messageDispaly = document.getElementById("message");
messageDispaly.textContent = "start";
for (i = 0; i < boxes.length; i++){
    //add colors to boxs
    boxes[i].style.backgroundColor = colors[i];
    // add click event listener
    boxes[i].addEventListener("click", function(){
        // alert(" was clicked!");
        //grab clicked color box
        var clickedColor = this.style.backgroundColor;
        //compare to pickedColor
        if(clickedColor === pickedColor){
            // alert("correct");
            
            header.style.backgroundColor = clickedColor;
            header.classList.add("correct");
            messageDispaly.textContent = "CORRECT ";
            changeColor(clickedColor);
        }else{
            // alert("Wrong");
            this.style.backgroundColor = "#232323";
            messageDispaly.textContent = "try again ";
        }
    });
}

//change all colors to match correct color
function changeColor(color){
    for(i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = color;
    }
}

//pick a new color
function pickNewColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
//generates random colors
function generateRandomColors(num){
    //make an array
    var arr = [];
    // add num random colors to array
    for(i = 0; i < num; i++){
        //get random color and push to arr
    }
    //return array
    return arr;
}

// makes the actul color for colors
function makeColors(){
    //pick a red 0 - 255
    var red = Math.floor(Math.random() * 256);
    //pick a green
    var green = Math.floor(Math.random() * 256);
    //pick a blue
    var blue = Math.floor(Math.random() * 256);
}