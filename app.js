const titles = document.querySelector('.titles');
document.querySelector('#p-total-count').innerHTML+=`${countries.length}`;

//BUTTONS
const searchStartButton = document.querySelector('.starts-with-button');
const searchAnyButton = document.querySelector('.search-word-button');
const reverseButton = document.querySelector('.reverse-icon');
const searchIcon = document.querySelector('.search-icon');

const userInput = document.querySelector('#user-input');

const displayContainer = document.querySelector('.display-container');

let startClicked = false;
let includeClicked = false;

//must be let 
let copy = [...countries];
let filtered = copy;

const display = (arr) => {    
    displayContainer.innerHTML ='';
    for (const country of arr) {
        const div = document.createElement('div');
        div.setAttribute('class', 'div-country');
        div.textContent = country.toUpperCase();
        displayContainer.appendChild(div);
    }   
    userInput.value = null;
}


const infoAppending = (arr) => {
    const line = `<p>Countries containing <i style="color:red"> ${userInput.value} </i>  are <span style="color:lightgreen">${arr.length}   </span></p>`;
    titles.innerHTML += line;   
}

const searchStart = (arr) => { 
    filtered = arr.filter((country => country.startsWith(userInput.value)));
    return filtered;  
}

const searchAny = (arr) => {
    filtered =  arr.filter((country => country.includes(userInput.value)));
    return filtered;
}

const reversing = (arr) => {   
    return arr.reverse()
}



//USER ACTIONS 
searchStartButton.addEventListener('click', () => {  
    display(searchStart(copy)) 
    startClicked = true  
});

searchAnyButton.addEventListener('click', () => {
    display(searchAny(copy))
    includeClicked = true
     
})

reverseButton.addEventListener('click', () => {
    if (userInput.value = '') {
        display(reversing(copy))
    } else {
        display(reversing(filtered))
    }   
})

searchIcon.addEventListener('click', () => {
    display(searchAny(copy));
})

userInput.addEventListener('input', event => {
    if (startClicked || includeClicked) {
        infoAppending(filtered)
    }
    includeClicked = false;   
 })

//STARTING
display(copy);