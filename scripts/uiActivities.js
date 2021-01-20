export default class uiActivities {

    static printCategories(categories){
        let container = document.getElementById("category-selector");
    
        categories.trivia_categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`
        });
    }

    static printQuestions(data) {
        let container = document.getElementById('questions-container');
        let arrayOfElements = [];

        container.innerHTML = '';

        data.results.forEach((element) => {
    
            let list = element.incorrect_answers;
            let s = element.correct_answer;
            console.log(decodeURI(s));
            list.push(s);
            arrayOfElements.push(element);
            
            list.sort(() => Math.random() - 0.5);
    
            container.innerHTML += `<div class="col-md-4">
                                        <div class="card">
                                            <div class="card-body">
                                                ${element.question}
                                            </div>
                                            <form id="question">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadio${element.question}" id="flexRadio${list[0]}" required>
                                                <label class="form-check-label" for="flexRadio${list[0]}">
                                                ${list[0]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadio${element.question}" id="flexRadio${list[1]}" required>
                                                <label class="form-check-label" for="flexRadio${list[1]}">
                                                ${list[1]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadio${element.question}" id="flexRadio${list[2]}" required>
                                                <label class="form-check-label" for="flexRadio${list[2]}">
                                                ${list[2]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadio${element.question}" id="flexRadio${list[3]}" required>
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

    static getScore(data) {
        let score = 0;
        
        data.forEach((element) => {

            let s = element.correct_answer;
            s.normalize();

            let idOfView = "flexRadio"+s;

            if (document.getElementById(idOfView).checked){
                score++;
            }
       
        });

        alert("Obtuviste "+score+" puntos.");
    }
    

    getCleanedString(cadena){
    
        var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
     
        for (var i = 0; i < specialChars.length; i++) {
            cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
        }   
     
        cadena = cadena.toLowerCase();
     
        cadena = cadena.replace(/ /g,"_");
     
        cadena = cadena.replace(/á/gi,"a");
        cadena = cadena.replace(/é/gi,"e");
        cadena = cadena.replace(/í/gi,"i");
        cadena = cadena.replace(/ó/gi,"o");
        cadena = cadena.replace(/ú/gi,"u");
        cadena = cadena.replace(/ñ/gi,"n");
        return cadena;
     }
}