import apiActivities from './scripts/apiActivities.js';
import uiActivities from './scripts/uiActivities.js'

const formQuestions = document.querySelector('#form-questions');
const formAnswers = document.querySelector('#form-answers')
const url = "https://opentdb.com/api_category.php";

let dataToAsk;
let dataReceived = [];

function getCategories(urlRecibido){
    fetch(urlRecibido)
        .then((response) => response.json())
        .then((categories) => uiActivities.printCategories(categories));
}

function getNumberOfCuestions() {

    let numberContainer = document.getElementById("amount-selector");

    for(let i = 1; i < 50; i++){
        numberContainer.innerHTML +=  `<option value="${i}">${i}</option>`;
    }
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
getNumberOfCuestions();

formQuestions.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("call of duty");
    dataToAsk = getUrl();
    if(dataToAsk[3] === "boolean"){
        apiActivities.getQuestionsBoolean(getUrl());
    } else {
        apiActivities.getQuestions(getUrl());
    }

});

formAnswers.addEventListener('submit', (event) => {
    event.preventDefault();
    if(dataToAsk[3] === "boolean"){
        uiActivities.getScoreBoolean(apiActivities.dataReceived);
    } else {
        uiActivities.getScore(apiActivities.dataReceived);
    }
    console.log()
});