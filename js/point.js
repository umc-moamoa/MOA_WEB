const $SurveyList = document.querySelector("#SurveyList");
var my_jwt = localStorage.getItem('x-access-token');
const fetchSurvey = () => {
    var requestOptions = {
        method: "GET",
        headers: {'x-access-token' : my_jwt,}
    };

    fetch(
        `http://seolmunzip.shop:9000/users/point`,
        requestOptions
    )
        .then((response) => response.json())
        // .then((webResult) => console.log(webResult.result))
        .then((webResult) => webResult.result.map(item => SurveyListTemplate(item)))
        .then((webResult) => slick())
        .catch((error) => console.log("error", error));
}

fetchSurvey();

function SurveyListTemplate (data) {
    const SurveyItem = `<div id="main1">
                            <div class="one-container1">
                                <a id="title1" data-id=${data.postId}>  ${data.title}  </a>
                            </div>
                            <div class="two-container1">
                                <span id="count1">11개 항목</span>
                                <span id="type1">선택형</span>
                            </div>
                            <div class="three-container1">
                                <span id="point1">  ${data.point}P  </span>
                            </div>
                        </div>
    `;

$SurveyList.insertAdjacentHTML('beforeend', SurveyItem);
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