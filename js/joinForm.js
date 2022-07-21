const $SurveyQuestion = document.querySelector("#SurveyQuestion");

const fetchSuryeyIn = () => {
    var requestOptions = {
        method: "GET",
    };

    fetch(
        "http://umcsom.shop:9000/posts/1",
        requestOptions
    )
        .then((response) => response.json())
        // .then((webResult) => console.log(webResult))
        // .then((webResult) => console.log(webResult.result))
        .then((webResult) => webResult.result.map(item => SurveyInTemplate(item)))
        .catch((error) => console.log("error", error));

}

fetchSuryeyIn();

function SurveyInTemplate(data) {
    const SurveyQ = `<div class="question"><div><span>${data.question}</span>
    <span class="required">필수</span></div>
    <textarea id="textarea2" cols="108" rows="15" placeholder=" 자유롭게 적어주세요."></textarea>
</div>`

$SurveyQuestion.insertAdjacentHTML('beforeend',SurveyQ);
}