const $SurveyList = document.querySelector("#SurveyList");

const fetchParticipate = () => {
    var requestOptions = {
        method: "Get",
    };

    fetch(
        "http://umcsom.shop:9000/users/2/post",
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) => webResult.result.map(item => ParticipateListTemplate(item)))
        .catch((error) => console.log("error", error));
}

fetchParticipate();

function ParticipateListTemplate(data) {
    const ParticipatedItem = `<div id="main1">
    <div class="one-container1">
        <a id="title1" href="../html/moa1.html">  ${data.postTitle}  </a>
    </div>
    <div class="two-container1">
        <span id="count1">${data.qcount}개 항목</span>
        <span id="type1">선택형</span>
    </div>
    <div class="three-container1">
        <span id="point1">  ${data.point}P  </span>
    </div>
</div>
`;

$SurveyList.insertAdjacentHTML('beforeend', ParticipatedItem);
}