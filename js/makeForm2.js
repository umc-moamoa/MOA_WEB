function setDeadline() {
    var deadline = document.getElementById("inputDate");
    deadline.value = new Date().toISOString().substring(0, 10);
    deadline.min = new Date().toISOString().substring(0, 10);
}

// 폼 데이터 정리 (보내기 위해)
function sortQuestion() {

    // .value들은 다 임의로 넣어둔 값

    // CategoryId
    var Stype = document.getElementById("Stype");
    var CategoryId = Stype.options[Stype.selectedIndex].value; 
    console.log(CategoryId);

    // title, content
    var title = document.getElementById("inputTitle");
    title.value = '제목';
    var content = document.getElementById("inputExplain");
    content.value = '설명';
    console.log(title.value);
    console.log(content.value);

    // deadline
    var deadline = document.getElementById("inputDate");
    deadline.value = '2022-08-31';
    console.log(deadline.value);

    // postDetails
    var postDetails = new Array();
    var postFormat = new Array();

    // 일단 큰 틀은? surveryElement 모두 처리 할 때까지!
    // question div는 전체 배열로 찾고 해도 될 듯. 어차피 elements 인덱스랑 같은 맥락으로 작동함.
    // Qinput, Qtype 해당.
    var elements = document.getElementsByClassName("surveyElement");
    var questions = document.getElementsByClassName("Qinput");
    var types = document.getElementsByClassName("Qtype");
    var shortCount = 0;
    var longCount = 0;
    for (i=0; i<elements.length; i++) {
        // elements[0]이 문항 1번.

        // format, questions
        var format = types[i].value;
        postDetails.push(format); // 1,2,3,4

        var question = questions[i].value;
        question = "hi"; 
        postDetails.push(question);

        // makeoption은 elements[i]의 children 중에서 구별해서 써야함.
        var options = elements[i].children;
        postFormat.splice(0, postFormat.length); // postFormat 비우고 추가.
        for (j=1; j<options.length-1; j++) {
            var item = options[j].children[1].value;
            item = j;
            postFormat.push(item);
        }
        
        // shortCount, longCount
        if (types[i].value == 4)
        longCount++;
        else
        shortCount++;
        
        postDetails.push(postFormat);
        console.log(postDetails);
    }
    console.log(shortCount);
    console.log(longCount);
}