//BUTTONS

const startsWithButton = document.querySelector('.starts-with-button');
const searchAnyWord = document.querySelector('.search-word-button');
const reverseButton = document.querySelector('.reverse-icon');
const searchIcon = document.querySelector('.search-icon');
document.querySelector('#p-total-count').innerHTML+=`${countries.length}`;

const titles = document.querySelector('.titles');
//const line = `<p>Countries containing <i style="color:red"> ${userInput.value} </i>  are <span style="color:lightgreen">${arr.length}</span></p>`


const displayContainer = document.querySelector('.display-container');
const userInput = document.querySelector('#user-input');

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
display(countries);

// const infoAppending = (userInput) => {
//     while (userInput.value != '') {
        
//         titles.innerHTML += line;
//     } 
// }

const searchStart = (arr) => { 
    return arr.filter((country => country.startsWith(userInput.value)));
   
}

const searchAny = (arr) => {
    return arr.filter((country => country.includes(userInput.value)));
}

const reversing = (arr) => {
    //const arrCopy =[...arr]
    return arr.reverse()
}

//USER ACTIONS
startsWithButton.addEventListener('click', () => {  
    display(searchStart(countries))    
});

searchAnyWord.addEventListener('click', () => {
    display(searchAny(countries))
})

reverseButton.addEventListener('click', () => {
    reversing(display(countries))
    //display(reversing(countries));
})

searchIcon.addEventListener('click', () => {
    display(searchAny(countries));
})