
const canvas = document.getElementById("pixel_canvas");
// Select color input
// Select size input
 var colorSelected = document.getElementById("colorPicker").value;

let picker =  document.getElementById("sizePicker");

    picker.addEventListener('submit' ,function(event){
    event.preventDefault();
     while(canvas.firstChild){
     	canvas.removeChild(canvas.firstChild);
     }
    var gridWidth = document.getElementById("input_width").value;

    var gridzHeight = document.getElementById("input_height").value;
	makeGrid(gridWidth , gridzHeight );
});

// When size is submitted by the user, call makeGrid()

function makeGrid(gridWidth , gridzHeight ) {
// Your code goes here!
for(let r = 0 ; r < gridWidth ; r++){
	let row = document.createElement("tr");
	for(let column = 0 ; column < gridzHeight;column++){
      let column = document.createElement("td");

       row.appendChild(column);

       column.addEventListener("click" , function(event){
        event.preventDefault;
      this.style.backgroundColor = document.getElementById("colorPicker").value;
    });
	}

	canvas.appendChild(row);
}
}
