// 폼 데이터 정리 (보내기 위해)
function sortQuestion() {

    // title, content
    var title = document.getElementById("inputTitle");
    var content = document.getElementById("inputExplain");
    
    var whole = new Array();
    whole.push(title);
    whole.push(content);

    // deadline
    var deadline = document.getElementById("deadline");

    // postDetails
    var postDetails = new Array();
    var postFormat = new Array();

    // 일단 큰 틀은? surveryElement 모두 처리 할 때까지!
    // question div는 전체 배열로 찾고 해도 될 듯. 어차피 elements 인덱스랑 같은 맥락으로 작동함.
    // Qinput, Qtype 해당.
    var elements = document.getElementsByClassName("surveyElement");
    var questions = document.getElementsByClassName("Qinput");
    var types = document.getElementsByClassName("Qtype");
    for (i=0; i<elements.length; i++) {
        // elements[0]이 문항 1번.

        questions[0].value = "hi";
        postDetails.push(questions[0].value);
        postDetails.push(types[0].value); // 1,2,3,4

        // makeoption은 elements[i]의 children 중에서 구별해서 써야함.
        var options = elements[i].children;
        postFormat.splice(0, postFormat.length); // postFormat 비우고 추가.
        for (j=1; j<options.length-1; j++) {
            var option = options[j].children[1];
            postFormat.push(option);
        }

        postDetails.push(postFormat);

    }

    whole.push(postDetails);

    console.log(whole);
}