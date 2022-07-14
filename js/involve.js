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
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

}

fetchSuryeyIn();

function SurveyInTemplate(data) {
    const SurveyQ = `<div class="question"><div><span id="Q2">${data.result.question}</span>
    <span class="required">필수</span></div>
    <textarea id="textarea2" cols="108" rows="15" placeholder=" 자유롭게 적어주세요."></textarea>
</div>`

$SurveyQuestion.insertAdjacentHTML('beforeend',SurveyQ);
}