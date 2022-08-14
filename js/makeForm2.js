var my_jwt = localStorage.getItem('x-access-token');
var semiCategoryId;
var semiShortCount = 0;
var semiLongCount = 0;
var semiTitle;
var semiContent;
var semiDeadline;
var semiPostDetails = new Array();
var semiPostItems = new Array();
var semiPostFormat = new Array();
var elements = document.getElementsByClassName("surveyElement");
var questions = document.getElementsByClassName("Qinput");
var types = document.getElementsByClassName("Qtype");
var format;
var question;
var options;
var item;
var i;

function setDeadline() {
    var deadline = document.getElementById("inputDate");
    deadline.value = new Date().toISOString().substring(0, 10);
    deadline.min = new Date().toISOString().substring(0, 10);
}

// 폼 데이터 정리 (보내기 위해)
function sortQuestion() {

    // CategoryId
    var Stype = document.getElementById("Stype");
    semiCategoryId = Stype.options[Stype.selectedIndex].value; 
    // console.log(semiCategoryId);

    // title, content
    semiTitle = document.getElementById("inputTitle").value;
    semiContent = document.getElementById("inputExplain").value;
    // console.log(semiTitle);
    // console.log(semiContent);

    // deadline
    semiDeadline = document.getElementById("inputDate").value;
    // console.log(semiDeadline);
    
    // 일단 큰 틀은? surveryElement 모두 처리 할 때까지!
    // question div는 전체 배열로 찾고 해도 될 듯. 어차피 elements 인덱스랑 같은 맥락으로 작동함.
    // Qinput, Qtype 해당.
    semiPostDetails = semiPostItems;
    for (i=0; i<elements.length; i++) {
        // 2차원 배열
        semiPostItems[i] = new Array(3);
    }
    for (i=0; i<elements.length; i++) {
        // elements[0]이 문항 1번.

        // format, questions
        format = types[i].value;
        semiPostItems[i][0] = format;

        question = questions[i].value;
        semiPostItems[i][1] = question;

        semiPostFormat.splice(0, semiPostFormat.length); // postFormat 비우고 추가.
        // makeoption은 elements[i]의 children 중에서 구별해서 써야함.
        options = elements[i].children;
        if (types[i].value == 1 || types[i].value == 2) {
            for (j=0; j<options.length-2; j++) {
                semiPostFormat[i] = new Array(options.length-2);
            }
            for (j=1; j<options.length-1; j++) {
                item = options[j].children[1].value;
                semiPostFormat[i][j-1] = item;
            }
        } else if (types[i].value == 3 || types[i].value == 4) {
            semiPostFormat[i] = new Array(1);
            item = options[1].children[1].value;
            semiPostFormat[i][0] = item;
        }
        semiPostItems[i][2] = semiPostFormat[i];
        
        // shortCount, longCount
        if (types[i].value == 4) {
            semiLongCount++;    
        }
        else {
            semiShortCount++;
        }
        
    }
    console.log(semiPostDetails);
    // console.log(semiShortCount);
    // console.log(semiLongCount);

    fetchMakeForm();
}

function fetchMakeForm() {
    const formItem = {
        categoryId : semiCategoryId,
        shortCount : semiShortCount,
        longCount : semiLongCount,
        title : semiTitle,
        content : semiContent,
        deadline : semiDeadline,
        postDetails : semiPostDetails
    }
    // 만약 format, question, format, item 까지 명칭으로 보내야 되는 거면 
    // 혹시 인덱스로 그냥 구분하면 안 되는지 의논해보기. 어차피 인덱스 0,1,2가 전부라 되지 않을까?

    console.log(formItem);

    fetch(`http://seolmunzip.shop:9000/posts` , {
        method: "POST",
        headers: {'x-access-token' : my_jwt, 'Content-Type': 'application/json' } ,
        body: JSON.stringify(formItem)
    })

    .then((response) => response.json())
    .catch((error) => console.log("error", error))
}