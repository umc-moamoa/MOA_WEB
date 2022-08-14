const $SurveyList = document.querySelector("#SurveyList");
var my_jwt = localStorage.getItem('x-access-token');

const fetchInterest = () => {
    var requestOptions = {
        method: "Get",
        headers: {'x-access-token' : my_jwt}
    };

    fetch(
        "http://seolmunzip.shop:9000/users/interest",
        requestOptions
    )
        .then((response) => response.json())
        .then((Result) => {
            Result.result.map(item => InterestListTemplate(item));
            slick();
        })
        //.then((Result) => slick())
        // 관심있는 설문조사 데이터가 없는건가.. 나오지 않는다. 하트 처리가 안되는건가?
        .catch((error) => console.log("error", error));
}

fetchInterest();

function InterestListTemplate(data) {
    const InterestItem = `<div id="main1">
    <div class="one-container1">
        <a id="title1" href="../html/detailPage.html">${data.title}</a>
    </div>
    <div class="two-container1">
        <span id="count1">${data.qcount}개 항목</span>
        <span id="type1">D-4</span>
    </div>
    <div class="three-container1">
        <span id="point1">  ${data.point}P  </span>
    </div>
</div>
`;
var data_id=`${data.postId}`;

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

