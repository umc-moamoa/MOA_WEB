const $SurveyList = document.querySelector("#SurveyList");

// html에서 카테고리 선택하면 알아서 categoryId에 맞게 리스트가 나와야함. -> 확인 아직 못함. 데이터 없어서!
function selectedValue() {
    var select = document.getElementById('Stype');
    var value = select.options[select.selectedIndex].value; 

    return value;
}

const fetchSurvey = () => {
    var requestOptions = {
        method: "GET",
    };

    var category = selectedValue();

    fetch(
        `http://seolmunzip.shop:9000/posts?categoryId=${category}`,
        requestOptions
    )
        .then((response) => response.json())
       /*  .then((webResult0) => console.log(webResult0)) */
        .then((webResult) => webResult.result.map(item => SurveyListTemplate(item)))
        .then((webResult) => slick())
        .catch((error) => console.log("error", error));
}

fetchSurvey();

function SurveyListTemplate (data) {
    const SurveyItem1 = `<div id="main1">
                            <div class="one-container1">
                                <a id="title1" href="../html/detailPage.html" data-id=${data.postId}>  ${data.title}  </a>
                            </div>
                            <div class="two-container1">
                                <span id="count1">${data.qcount}개 항목</span>
                                <span id="type1">D-${data.dday}</span>
                            </div>
                            <div class="three-container1">
                                <span id="point1">  ${data.point}P  </span>
                            </div>
                        </div>
    `;
    const SurveyItem2 = `<div id="main1">
                            <div class="one-container1">
                                <a id="title1" href="../html/detailPage.html" data-id=${data.postId}>  ${data.title}  </a>
                            </div>
                            <div class="two-container1">
                                <span id="count1">${data.qcount}개 항목</span>
                                <span id="type1">CLOSED</span>
                            </div>
                            <div class="three-container1">
                                <span id="point1">  ${data.point}P  </span>
                            </div>
                        </div>
    `;

    if ( data.dday == null ) {
        $SurveyList.insertAdjacentHTML('beforeend', SurveyItem2);
    } else {
        $SurveyList.insertAdjacentHTML('beforeend', SurveyItem1);
    }
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