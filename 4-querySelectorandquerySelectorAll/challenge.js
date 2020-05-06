//cycle over the list items and apply colors from the array called colours
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
//1st create variable
const listItems = document.querySelectorAll("li");

// for loop, loop over every single li
//apply colours to each li
for (let i=0; i < listItems.length; i++) {
    listItems[i].style.color = colours[i];
}
//test
