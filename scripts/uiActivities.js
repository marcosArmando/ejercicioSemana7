export default class uiActivities {

    static printCategories(categories){
        let container = document.getElementById("category-selector");
    
        console.log(categories);
        categories.trivia_categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }

    static printQuestions(data) {
        let container = document.getElementById('questions-container');
        let arrayOfElements = [];

        container.innerHTML = '';

        data.results.forEach((element) => {
    
            console.log(element);
            let list = element.incorrect_answers;
            list.push(element.correct_answer);
            arrayOfElements.push(element);
            
            list.sort(() => Math.random() - 0.5);
    
            container.innerHTML += `<div class="col-md-4">
                                        <div class="card">
                                            <div class="card-body">
                                                ${element.question}
                                            </div>
                                            <form id="question">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadio${element.correct_answer}" id="flexRadio${list[0]}" required>
                                                <label class="form-check-label" for="flexRadio${list[0]}">
                                                ${list[0]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadio${element.correct_answer}" id="flexRadio${list[1]}" required>
                                                <label class="form-check-label" for="flexRadio${list[1]}">
                                                ${list[1]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadio${element.correct_answer}" id="flexRadio${list[2]}" required>
                                                <label class="form-check-label" for="flexRadio${list[2]}">
                                                ${list[2]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadio${element.correct_answer}" id="flexRadio${list[3]}" required>
                                                <label class="form-check-label" for="flexRadio${list[3]}">
                                                ${list[3]}
                                                </label>
                                            </div>
                                            </form>
                                        </div>
                                    </div>`
        });

        return arrayOfElements;
    }

    static printQuestionsBoolean(data) {

        let container = document.getElementById('questions-container');
        let arrayOfElements = [];

        container.innerHTML = '';

        data.results.forEach((element) => {

            arrayOfElements.push(element);
                
            container.innerHTML += `<div class="col-md-4">
                                        <div class="card">
                                            <div class="card-body">
                                                ${element.question}
                                            </div>
                                            <form id="question">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadio${element.question}" id="flexRadio${element.question}true" required>
                                                <label class="form-check-label" for="flexRadio${element.question}true">
                                                True
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadio${element.question}" id="flexRadio${element.question}false" required>
                                                <label class="form-check-label" for="flexRadio${element.question}false">
                                                False
                                                </label>
                                            </div>
                                            </form>
                                        </div>
                                    </div>`
        });

        return arrayOfElements;
    }

    static getScore(data) {
        let score = 0;
        
        data.forEach((element) => {

            let idName = "flexRadio"+element.correct_answer;

            if(document.getElementById(idName).checked){
                score++;
            }
       
        });

        alert("Obtuviste "+score+" puntos.");
    }
    
    static getScoreBoolean(data) {
        let score = 0;

        data.forEach((element) => {
            console.log(element.correct_answer);
            let idName = "flexRadio"+element.question+element.correct_answer+"";
            console.log(idName);

            if(document.getElementById(idName).checked){
                score++;
            }
       
        });

        alert("Obtuviste "+score+" puntos.");
    }
}