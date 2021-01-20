import apiActivities from './scripts/apiActivities.js';
import uiActivities from './scripts/uiActivities.js'

const formQuestions = document.querySelector('#form-questions');
const formAnswers = document.querySelector('#form-answers')
const url = "https://opentdb.com/api_category.php";

let dataReceived = [];

function getCategories(urlRecibido){
    fetch(urlRecibido)
        .then((response) => response.json())
        .then((categories) => uiActivities.printCategories(categories));
}

function getUrl(){

    let urlQueryData;

    const amountOfQuestions = document.getElementById('amount-selector').value;
    const categoryOfQuestions = document.getElementById('category-selector').value;
    const difficultyOfQuestions = document.getElementById('difficulty-selector').value;
    const typeOfQuestions = document.getElementById('type-selector').value;

    urlQueryData = [amountOfQuestions, categoryOfQuestions, difficultyOfQuestions, typeOfQuestions];

    return urlQueryData;
    
}


getCategories(url);

formQuestions.addEventListener('submit', (event) => {
    event.preventDefault();
    getUrl();
    apiActivities.getQuestions(getUrl());
});

formAnswers.addEventListener('submit', (event) => {
    event.preventDefault();
    uiActivities.getScore(apiActivities.dataReceived);
    console.log()
});

