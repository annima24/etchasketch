
const container = document.getElementById('container');// The container const is the main container that will house the drawing area
const reset = document.getElementById('reset'); //Stores the reset button  

//sets a function that will be used when the event listener for going over grid spaces is called. checks to see if the target is not the container object and if it isnt the background color is changed to black by adding a class 
function draw(e) {
    if (e.target!==container){
    e.target.classList.add('black') 
    }
};

function makeGrid(squares)  {
    if (squares > 3 && squares < 65)    {
        container.style.setProperty('--grid-row',squares) 
        container.style.setProperty('--grid-col',squares) 
    for (let i = 0; i < squares * squares; i++) {
        const cell = document.createElement('div');
        cell.classList.add('item');   
        container.appendChild(cell);    
 }
}   else (alert('error'), userEntry());
    
}

function userEntry()    {
    const enter =prompt("Enter number of squares per side. Number must be between 4-64.");
    makeGrid(enter);
    
    
}

userEntry();

container.addEventListener('mouseover',draw);

reset.onclick = () => {   
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    userEntry();
  }


// create a function the changes css class to black background
// set up an event listener to trigger that function when mouseover occurs


// for the shader function - do an even listener that does a loop and if the shade% is < 100 add 10% shade...opacity .1 ++ .1 maybe