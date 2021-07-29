document.addEventListener('DOMContentLoaded', () => {

    // Grabbing classes and assigning them to variables
    let colourCircle = document.querySelector('.colour-circle');
    let colourChangeButton = document.querySelector('.colour-change-button');

    // This is an array, containing some colours
    colours = ['white', 'orange', 'black', 'green', 'yellow', 'lightBlue', 'purple', 'red', 'pink'];

    // Click event created and attached to button
    colourChangeButton.addEventListener('click', () => {
        // console.log('button clicked')
    
        // Created a colourJumbler function
        // random() gives a random number between 0 and 1 
        let colourJumbler = colours[Math.floor(Math.random() * colours.length)]

        // Change the style colour to the colourJumbler function above
        colourCircle.style.backgroundColor = colourJumbler;


    })


});