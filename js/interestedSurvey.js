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
        .then((webResult) => {
            console.log(webResult);
            webResult.result.map(item => InterestListTemplate(item));
            slick();
        })
        .catch((error) => console.log("error", error));
}

fetchInterest();

function InterestListTemplate(data) {
    const postId = data.postId;
    const InterestItem = `<div id="main1">
    <div class="one-container1">
        <a id="title1" href="../html/detailPage.html?${postId}">${data.title}</a>
    </div>
    <div class="two-container1">
        <span id="count1">${data.qcount}개 항목&nbsp;&nbsp;</span>
        <span id="type1">ㅣ&nbsp;&nbsp;D-${data.d_day}</span>
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

