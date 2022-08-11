var my_jwt = localStorage.getItem('x-access-token');
var semiCategoryId;
var semiShortCount = 0;
var semiLongCount = 0;
var semiTitle;
var semiContent;
var semiDeadline;
var semiPostDetails;
var semiPostItems;
var semiPostFormat;

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
    semiCategoryId = Stype.options[Stype.selectedIndex].value; 
    // console.log(semiCategoryId);

    // title, content
    semiTitle = document.getElementById("inputTitle").value;
    // semiTitle = '제목';
    semiContent = document.getElementById("inputExplain").value;
    // semiContent = '설명';
    // console.log(semiTitle);
    // console.log(semiContent);

    // deadline
    semiDeadline = document.getElementById("inputDate").value;
    // semiDeadline = '2022-08-31';
    // console.log(semiDeadline);

    // postDetails
    semiPostDetails = new Array();
    semiPostItems = new Array();
    semiPostFormat = new Array();

    // 일단 큰 틀은? surveryElement 모두 처리 할 때까지!
    // question div는 전체 배열로 찾고 해도 될 듯. 어차피 elements 인덱스랑 같은 맥락으로 작동함.
    // Qinput, Qtype 해당.
    var elements = document.getElementsByClassName("surveyElement");
    var questions = document.getElementsByClassName("Qinput");
    var types = document.getElementsByClassName("Qtype");
    var format;
    var question;
    var options;
    var item;
    for (var i=0; i<elements.length; i++) {
        // elements[0]이 문항 1번.

        // format, questions
        format = types[i].value;
        // semiPostItems.push(format);
        semiPostItems[0] = format;

        question = questions[i].value;
        // semiPostItems.push(question);
        semiPostItems[1] = question;

        semiPostFormat.splice(0, semiPostFormat.length); // postFormat 비우고 추가.
        // makeoption은 elements[i]의 children 중에서 구별해서 써야함.
        options = elements[i].children;
        for (j=1; j<options.length-1; j++) {
            item = options[j].children[1].value;
            // item = j;
            semiPostFormat.push(item);
        }
        // semiPostItems.push(semiPostFormat);
        semiPostItems[2] = semiPostFormat;
        semiPostDetails.push(semiPostItems);
        // semiPostDetails[i] = semiPostItems;
        
        console.log(semiPostDetails);
        // shortCount, longCount
        if (types[i].value == 4)
            semiLongCount++;
        else
            semiShortCount++;
        
    }
    // console.log(semiShortCount);
    // console.log(semiLongCount);

    fetchMakeForm();
}

function fetchMakeForm() {
    const item = {
        categoryId : semiCategoryId,
        shortCount : semiShortCount,
        longCount : semiLongCount,
        title : semiTitle,
        content : semiContent,
        deadline : semiDeadline,
        postDetails : semiPostDetails
    }

    console.log(item);

    fetch(`http://seolmunzip.shop:9000/posts` , {
        method: "POST",
        headers: {'x-access-token' : my_jwt, 'Content-Type': 'application/json' } ,
        body: JSON.stringify(item)
    })

    .then((response) => response.json())
    .catch((error) => console.log("error", error))
}