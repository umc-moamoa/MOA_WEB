const $SurveyList = document.querySelector("#SurveyList");

const fetchSurvey = () => {
    var requestOptions = {
        method: "GET",
    };

    fetch(
        `http://umcsom.shop:9000/posts?categoryId=1`,
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
                                <a id="title1" href="../html/detailPage.html" data-id=${data.postId}>  ${data.title}  </a>
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