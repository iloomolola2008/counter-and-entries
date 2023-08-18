// - intialize the count as 0
// - listen for clicks on the increment button
// - increment the count variable when the button is clicked; then log out
// - change the counter in HTML to reflect the new document
// - create a function, save(), which logs out the count when its called


// - 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById ("prev");
let countEr = document.getElementById ("counter");
console.log (countEr);

let incrementCounter = 0; 

function increment () {
    // - change and use plus-equals-technique
    incrementCounter += 1
    countEr.textContent = incrementCounter
};

function save () {
    // - 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // - 3. Render the variable in the saveEl using innerText
    // - NB: Make sure to not delete the existing content of the paragraph
    let numCount = incrementCounter + " - ";
    saveEl.textContent += numCount;
    console.log (incrementCounter);
    countEr.textContent = 0 
    incrementCounter = 0;
};
