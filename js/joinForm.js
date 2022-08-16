const $SurveyQuestion = document.querySelector("#SurveyQuestion");
var my_jwt = localStorage.getItem('x-access-token');

const fetchSuryeyIn = () => {
    // const item = {
    //     postId : data_id
    // }
    var requestOptions = {
        method: "GET",
        headers: {'x-access-token' : my_jwt,}
    };

    fetch(
        "http://seolmunzip.shop:9000/posts/14",
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) => {
            console.log(webResult);
            console.log(webResult.result);
            webResult.result.map(item => SurveyInTemplate(item));
        })
        .catch((error) => console.log("error", error));

}

fetchSuryeyIn();

//type 1:객관식 2:체크박스 3:단답형 4:장문형
function SurveyInTemplate(data) {
    if(data.format == 1) {
        var SurveyQ = `<div class="question">
        <span id="Q3">${data.question}</span>
        <span class="required">필수</span>`

        var SurveyOption = `<div id="radioBox">
            <div class="Qtype1">
                <input type = "radio" name = "item"> <span class="radioBtnText">${data.item} </span> 
            </div>
        </div>
    </div>`
    // data_id = `${}`
    $SurveyQuestion.insertAdjacentHTML('beforeend',SurveyQ);
    $SurveyQuestion.insertAdjacentHTML('beforeend',SurveyOption);
    }
    else if(data.format == 2) {
        var SurveyQ = `<div class="question">
        <span id="Q3">${data.question}</span>
        <span class="required">필수</span>

        <div id="radioBox">
            <div class="Qtype1">
                <input type = "checkbox" name = "count" value = "1-2"> <span class="radioBtnText">한 달에 1-2번 </span> 
            </div>
            <div class="Qtype1">
                <input type = "checkbox" name = "count" value = "1"> <span class="radioBtnText">일주일에 1번 </span> 
            </div>
            <div class="Qtype1">
                <input type = "checkbox" name = "count" value = "3-4"> <span class="radioBtnText">일주일에 3-4번 </span> 
            </div>
            <div class="Qtype1">
                <input type = "checkbox" name = "count" value = "all"> <span class="radioBtnText">매일</span> 
            </div>
            <div class="Qtype1">
                <input type = "checkbox" name = "count" value = "etc"> <span class="radioBtnText">기타</span> 
            </div>
        </div>
    </div>`
    $SurveyQuestion.insertAdjacentHTML('beforeend',SurveyQ);
    $SurveyQuestion.insertAdjacentHTML('beforeend',SurveyOption);
    }
    else if(data.format == 3) {
        var SurveyQ = `<div class="question">
        <span id="Q1">${data.question}</span>
        <span class="required">필수</span>
        <input type="text" class="Qtype3" maxlength="30"
        placeholder="자유롭게 적어주세요."
        onfocus="this.placeholder = ''" 
        onblur="this.placeholder = '자유롭게 적어주세요.'"></textarea>
    </div>`
    $SurveyQuestion.insertAdjacentHTML('beforeend',SurveyQ);
    }

    else if(data.format == 4) {
        var SurveyQ = `<div class="question">
        <span id="Q2">${data.question}</span>
        <span class="required">필수</span>
        <textarea id="Qtype4" cols="108" rows="15" 
        placeholder=" 자유롭게 적어주세요."
        onfocus="this.placeholder = ''" 
        onblur="this.placeholder = ' 자유롭게 적어주세요.'"></textarea>
    </div>`
    $SurveyQuestion.insertAdjacentHTML('beforeend',SurveyQ);
    }
}

// function SurveyInTemplate2(data) {
//     if()
// }