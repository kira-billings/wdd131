const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function() {
    // code to execute when button is clicked
    if (input.value.trim() !== '') { //if blank after white space trimmed
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
        let li = document.createElement('li'); //create list item
        let deleteButton = document.createElement('button'); //create delete button
        li.textContent = item; 
        deleteButton.textContent = '❌'; //x emoji is used as delete text
        deleteButton.setAttribute('aria-label', 'Remove chapter'); //alt text for delete button
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () { 
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus(); //return cursor to input
        });
    };

    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }

    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }

    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter((item) => item !== chapter);
        setChapterList();
    }

    
