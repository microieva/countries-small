//BUTTONS

const startsWithButton = document.querySelector('#starts-with-button');
const searchAnyWord = document.querySelector('#search-word-button');
const reverseIcon = document.querySelector('#reverse');

const displayContainer = document.querySelector('.display-container');
const userInput = document.querySelector('#user-input');

const display = (arr) => {    
    displayContainer.textContent ='';
    for (const country of arr) {
        const div = document.createElement('div');
        div.setAttribute('class', 'div-country');
        div.textContent = country;
        displayContainer.appendChild(div);
    }
    
}
display(countries);

const searchStart = (arr) => {  
    return arr.filter((country => country.startsWith(userInput.value)));   
}

const searchAny = (arr) => {
    return arr.filter((country => country.includes(userInput.value)));
}



//USER ACTIONS
startsWithButton.addEventListener('click', () => {   
    display(searchStart(countries))
    userInput.value = null;
});

searchAnyWord.addEventListener('click', () => {
    display(searchAny(countries))
    userInput.value = null;
})

reverseIcon.addEventListener('click', () => {
    let result = countries.reverse();
    display(result);
})