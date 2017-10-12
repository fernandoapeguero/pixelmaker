const canvas = document.getElementById("pixel_canvas");
// Select color input
let picker = document.getElementById("sizePicker");

picker.addEventListener('submit', function(event) {
    event.preventDefault();
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    var gridWidth = document.getElementById("input_width").value;

    var gridzHeight = document.getElementById("input_height").value;
    makeGrid(gridWidth, gridzHeight);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(gridWidth, gridzHeight) {
    // Your code goes here!
    for (let r = 0; r < gridzHeight; r++) {
        const row = canvas.insertRow(r);
        for (let column = 0; column < gridWidth; column++) {
            const cell = row.insertCell(column);

            cell.addEventListener("mousedown", function(event) {
                event.preventDefault;

                cell.style.backgroundColor = document.getElementById("colorPicker").value;
            });
        }
    }
}