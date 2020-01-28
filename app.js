//BUTTONS

const startsWithButton = document.querySelector('.starts-with-button');
const searchAnyWord = document.querySelector('.search-word-button');
const reverseButton = document.querySelector('.reverse-icon');
document.querySelector('#p-total-count').innerHTML+=`${countries.length}`;


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
    
}
display(countries);

const infoAppending = () => {
    const titles = document.querySelector('.titles');
    const line = `<p>Countries containing <i style="color:red"> ${userInput.value} </i>  are <span style="color:lightgreen">${arr.length}</span></p>`
    titles.innerHTML += line;
}

const searchStart = (arr) => {  
    return filteredArray = arr.filter((country => country.startsWith(userInput.value)));
   
}

const searchAny = (arr) => {
    return arr.filter((country => country.includes(userInput.value)));
}

const reversing = (arr) => {
    //const result =[...arr]
    return arr.reverse()
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

reverseButton.addEventListener('click', () => {

    reversing(display(arr))
})