
const $SurveyList = document.querySelector("#SurveyList");

const fetchSurvey = () => {
    var requestOptions = {
        method: "GET",
    };

    fetch(
        "url",
        requestOptions
    )
        .then((response) => response.json())
        .then((result) => result.items.map(item => SurveyListTemplate(item)))
        .catch((error) => console.log("error", error));
}

fetchSurvey();

function SurveyListTemplate (data) {
    const SurveyItem = `<div id="main1">
                            <div class="one-container1">
                                <a id="title1" href="../html/moa1.html" data-id=${data.result.postId}>  ${data.result.title}  </a>
                            </div>
                            <div class="two-container1">
                                <span id="count1">  ${data.result.content}  </span>
                            </div>
                            <div class="three-container1">
                                <span id="point1">  ${data.result.point}  </span>
                            </div>
                        </div>
`;

$SurveyList.insertAdjacentHTML('beforeend', SurveyItem);
}