const $SurveyList = document.querySelector("#SurveyList");

const fetchInterest = () => {
    var requestOptions = {
        method: "Get",
    };

    fetch(
        "http://umcsom.shop:9000/users/1/interest",
        requestOptions
    )
        .then((response) => response.json())
        // .then((webResult) => console.log(webResult))
        .then((Result) => Result.result.map(item => InterestListTemplate(item)))
        .catch((error) => console.log("error", error));
}

fetchInterest();

function InterestListTemplate(data) {
    const InterestItem = `<div id="main1">
    <div class="one-container1">
        <a id="title1" href="../html/detailPage.html" data-id=${data.postId}>  ${data.title}  </a>
    </div>
    <div class="two-container1">
        <span id="count1">${data.numberOfQuestion}개 항목</span>
        <span id="type1">선택형</span>
    </div>
    <div class="three-container1">
        <span id="point1">  ${data.point}P  </span>
    </div>
</div>
`;

$SurveyList.insertAdjacentHTML('beforeend', InterestItem);
}