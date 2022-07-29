const $SurveyList = document.querySelector("#SurveyList");

const $detailTitle = document.querySelector("#detailTitle");
const $mainBottom = document.querySelector("#mainBottom");

const fetchSurvey = () => {
    var requestOptions = {
        method: "GET",
    };

    fetch(
        `http://umcsom.shop:9000/users/1`,
        requestOptions
    )
        .then((response) => response.json())
        // .then((webResult) => console.log(webResult.result))
        .then((webResult) => webResult.result.map(item => SurveyListTemplate(item)))
        .catch((error) => console.log("error", error));
}

fetchSurvey();

function SurveyListTemplate (data) {
    const SurveyItem = `
    <div id="main1">
        <div class="one-container1">
            <a id="title1" href="../html/moa1.html">${data.postTitle}</a>
        </div>
        <div class="two-container1">
            <div class="box">
                <span id="count1">문항 수 </span>
                <span id="count">${data.qcount}개</span>
            </div>
            <div class="box">
                <span id="point1">포인트</span>
                <span id="point">${data.point}P</span>
            </div>
            <div class="box">
                <span id="num">참여 인원</span>
                <span id="num">${data.postResultCount}명</span>
            </div>
        </div>
    </div>
    `;
$SurveyList.insertAdjacentHTML('beforeend', SurveyItem);
}
