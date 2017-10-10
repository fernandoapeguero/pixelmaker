let colorSelected , gridWidth , gridzHeight;

// Select color input
colorSelected = document.getElementById("colorPicker").value;

// Select size input

gridWidth = document.getElementById("gridWidth").value;

gridzHeight = document.getElementById("gridzHeight").value;

// When size is submitted by the user, call makeGrid()
let picker =  document.getElementById("sizePicker");
picker.addEventListener("click" , function(){
	document.getElementById("demo").innerHtml = colorSelected;

});

function makeGrid() {

// Your code goes here!


}
