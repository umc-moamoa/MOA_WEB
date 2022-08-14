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
    var Stype = document.getElementById("Stype");
    semiCategoryId = Stype.options[Stype.selectedIndex].value; 

    semiTitle = document.getElementById("inputTitle").value;
    semiContent = document.getElementById("inputExplain").value;

    semiDeadline = document.getElementById("inputDate").value;

    semiPostDetails = semiPostItems;
    for (i=0; i<elements.length; i++) {
        semiPostItems[i] = new Array(3);    // 2차원 배열
    }
    for (i=0; i<elements.length; i++) {     // elements[0]이 문항 1번.
        format = types[i].value;
        semiPostItems[i][0] = format;

        question = questions[i].value;
        semiPostItems[i][1] = question;

        semiPostFormat.splice(0, semiPostFormat.length);    // postFormat 비우고 추가.

        options = elements[i].children;
        if (types[i].value == 1 || types[i].value == 2) {
            for (j=1; j<options.length-1; j++) {
                item = options[j].children[1].value;
                semiPostItems[i][1+j] = item;
            }
        } else if (types[i].value == 3 || types[i].value == 4) {
            semiPostFormat[i] = new Array(1);
            item = options[1].children[1].value;
            semiPostItems[i][2] = item;
        }

        if (types[i].value == 4) {
            semiLongCount++;    
        }
        else {
            semiShortCount++;
        }
    }
    console.log(semiPostDetails);

    fetchMakeForm();
}

function fetchMakeForm() {
    const formItem = {
        "categoryId" : Number(semiCategoryId),
      /*   "categoryId" : 1, */
        "shortCount" : semiShortCount,
        "longCount" : semiLongCount,
        "title" : semiTitle,
        "content" : semiContent,
        "deadline" : semiDeadline,
        "postDetails" : semiPostDetails
    }

/*     console.log(typeof categoryId);
    console.log(typeof shortCount);
    console.log(typeof title); */
    console.log(JSON.stringify(formItem));

    fetch(`http://seolmunzip.shop:9000/posts` , {
        method: "POST",
        headers: {
            'x-access-token' : my_jwt,
            'Content-Type': 'application/json'            
        },
        body: JSON.stringify(formItem)
    })

    .then((response) => response.json())
    .then((response2) => {
        console.log(response2.message);
    })
    .catch((error) => console.log("error", error))
}