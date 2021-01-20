import uiActivities from './uiActivities.js';
export default class apiActivities {

    static dataReceived = [];

    static getQuestions(arrayQuery){
        fetch(`https://opentdb.com/api.php?amount=${arrayQuery[0]}&category=${arrayQuery[1]}&difficulty=${arrayQuery[2]}&type=${arrayQuery[3]}`)
            .then((response) => response.json())
            .then((data) => uiActivities.printQuestions(data))
            .then((data) => this.dataReceived = data);
    }
 

}