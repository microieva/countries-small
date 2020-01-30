const titles = document.querySelector('.titles');
document.querySelector('#p-total-count').innerHTML+=`${countries.length}`;
//const line = `<p>Countries containing <i style="color:red"> ${userInput.value} </i>  are <span style="color:lightgreen">${arr.length}</span></p>`

//BUTTONS
const searchStartButton = document.querySelector('.starts-with-button');
const searchAnyButton = document.querySelector('.search-word-button');
const reverseButton = document.querySelector('.reverse-icon');
const searchIcon = document.querySelector('.search-icon');

const userInput = document.querySelector('#user-input');

const displayContainer = document.querySelector('.display-container');

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


// const infoAppending = (userInput) => {
//     while (userInput.value != '') {
        
//         titles.innerHTML += line;
//     } 
// }

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
});

searchAnyButton.addEventListener('click', () => {
    display(searchAny(copy))
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

//STARTING
display(copy);