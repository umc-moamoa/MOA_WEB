const $SurveyList = document.querySelector("#SurveyList");

const fetchInterest = () => {
    var requestOptions = {
        method: "Get",
    };

    fetch(
        "http://seolmunzip.shop:9000/users/1/interest",
        requestOptions
    )
        .then((response) => response.json())
        .then((Result) => Result.result.map(item => InterestListTemplate(item)))
        .then((Result) => slick())
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
        <span id="type1"></span>
    </div>
    <div class="three-container1">
        <span id="point1">  ${data.point}P  </span>
    </div>
</div>
`;

$SurveyList.insertAdjacentHTML('beforeend', InterestItem);
}

function slick(){
    $(document).ready(function(){
        $('.SurveyList').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            rows:3,
            infinite:false,
            prevArrow : $('.prev'), 
            nextArrow : $('.next'), 
        });
    });
}

