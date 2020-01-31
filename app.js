const titles = document.querySelector('.titles');
document.querySelector('#p-total-count').innerHTML+=`${countries.length}`;

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

let appending = false;

if (userInput.value != '') {
    appending = true;
}

const display = (arr) => {       
    displayContainer.innerHTML ='';
    for (const country of arr) {
        const div = document.createElement('div');
        div.setAttribute('class', 'div-country');
        div.textContent = country.toUpperCase();
        displayContainer.appendChild(div);
    }   
    userInput.value = '';
}

const infoAppending = (arr) => { // input value WHERE FROM ???
    if (appending) {
        const line = `<p>Countries containing <i style="color:red"> ${userInput.value} </i>  are <span style="color:lightgreen">${arr.length}   </span></p>`;
        titles.innerHTML += line;      
    } 
}

const searchStart = (arr) => { 
    filtered = arr.filter((country => country.startsWith(userInput.value)));
    infoAppending(filtered);
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
    display(searchStart(copy)); 
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

// userInput.addEventListener('input', (e) => {
//     e.preventDefault();
//     if (startClicked || includeClicked) {
//         infoAppending(filtered)
//     }
       
//  })

//STARTING
display(copy);

// document.querySelectorAll('.button-block').forEach(item => {
//     item.addEventListener('click', (e) => {
//         searchStartButton = display(searchStart(copy));
//         searchAnyButton = display(searchAny(copy));
//         if (userInput.value = '') {
//             reverseButton = display(reversing(copy))
//         } else {
//             reverseButton = display(reversing(filtered))
//         } 
//         searchIcon = display(searchAny(copy));
//     })
//     console.log(e.target)
// });
//combine click events;
// buttonBlock.addEventListener('click', (e) => {
//     //alert(e.target)
// })

//create event for input to capture userInput.value to be able to check wether appending is true or not
