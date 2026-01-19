const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector("#list");


button.addEventListener('click', function() {
    // code to execute when button is clicked
    if (input.value.trim() !== '') { //if blank after white space trimmed
        const li = document.createElement('li'); //create list item
        const deleteButton = document.createElement('button'); //create delete button
        li.textContent = input.value; //user input is used as the text of the list item
        deleteButton.textContent = '❌'; //x emoji is used as delete text
        deleteButton.setAttribute('aria-label', 'Remove chapter'); //alt text for delete button
        deleteButton.addEventListener('click', () => { //added event listener click to delete button
            li.remove(); //removed list item upon click of delete button
        });
        li.append(deleteButton); //adds delete button to list item
        list.append(li); //adds list item to list
        input.value = ''; //clear input
        input.focus(); //return cursor to input
    }
})

input.value = '';
input.focus();
