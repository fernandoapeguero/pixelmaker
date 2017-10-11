let colorSelected , gridWidth , gridzHeight;
const canvas = document.getElementById("pixel_canvas");
// Select color input
 colorSelected = document.getElementById("colorPicker").value;

// Select size input

 gridWidth = document.getElementById("input_width").value;

 gridzHeight = document.getElementById("input_height").value;

// When size is submitted by the user, call makeGrid()
let picker =  document.getElementById("sizePicker");
picker.addEventListener("submit" ,makeGrid());

function makeGrid() {

// Your code goes here!
for(let r = 0 ; r < gridWidth ; r++){
	let row = document.createElement("tr");
	for(let column = 0 ; column < gridzHeight;column++){
      let column = document.createElement("td");

       row.appendChild(column);
	}

	canvas.appendChild(row);
}


}
