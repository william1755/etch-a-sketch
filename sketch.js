let container = document.createElement('div');
document.body.appendChild(container);
container.id = 'daddyDiv'

let papaDiv = document.createElement('div');
document.body.appendChild(papaDiv);
papaDiv.appendChild(container);
papaDiv.id = 'papaDiv'

let squarePrompt = document.getElementById('squareQuery');
squarePrompt.addEventListener('click', () => {
    updateGrid();
})



function updateGrid() {
    let squareValue = prompt('How many squares?')
    console.log(squareValue)

    function calculateSquare() {
        let square = 500;
        let squareSize = square / squareValue;
        return squareSize
    }

    squareSizeReturn = calculateSquare();

    console.log(squareSizeReturn)

    let squareSizeInPx = squareSizeReturn.toString();

    console.log(typeof(squareSizeInPx));

    for (i = 0; i < squareValue * squareValue; i++) {
        let divs = document.createElement('div');
        divs.classList.add('childDiv')
        container.appendChild(divs);    
        divs.style.width = squareSizeInPx + 'px';
        divs.style.height = squareSizeInPx + 'px';

        let clearButton = document.getElementById('clearButton');
        clearButton.addEventListener('click', () => {
            container.removeChild(divs);
        })

        divs.addEventListener('mouseenter', () => {
            divs.classList.add('bgChanged')
        });
    }
}