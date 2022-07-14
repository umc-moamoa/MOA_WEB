function addQuestion() {
    var surveyElements = document.getElementById("surveyElements");
    var newElement = document.createElement("button");

    surveyElements.appendChild(newElement);

    var div1 = document.createElement("div");
    div1.className = 'surveyElement';
    var div2 = document.createElement("div")
    div2.className = 'question';
    
}
