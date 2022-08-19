const $SurveyList = document.querySelector("#SurveyList");
var my_jwt = localStorage.getItem('x-access-token');

const fetchParticipate = () => {
    var requestOptions = {
        method: "Get",
        headers: {'x-access-token' : my_jwt,}
    };

    fetch(
        "http://seolmunzip.shop:9000/users/partPost",
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) => {
            webResult.result.map(item => ParticipateListTemplate(item));
            console.log(webResult);
            slick();
        })
        .catch((error) => console.log("error", error));
}

fetchParticipate();

function ParticipateListTemplate(data) {
    const ParticipatedItem1 = `
        <div id="main1">
            <div class="one-container1">
                <a id="title1" href="../html/detailPage.html">  ${data.title}  </a>
            </div>
            <div class="two-container1">
                <span id="count1">${data.qcount}개 항목&nbsp;&nbsp;</span>
                <span id="type1">ㅣ&nbsp;&nbsp;D-${data.dday}</span>
            </div>
            <div class="three-container1">
                <span id="point1">  ${data.point}P  </span>
            </div>
        </div>
    `;
    const ParticipatedItem2 = `
        <div id="main1">
            <div class="one-container1">
                <a id="title1" href="../html/detailPage.html">  ${data.title}  </a>
            </div>
            <div class="two-container1">
                <span id="count1">${data.qcount}개 항목&nbsp;&nbsp;</span>
                <span id="type1">ㅣ&nbsp;&nbsp; CLOSED</span>
            </div>
            <div class="three-container1">
                <span id="point1">  ${data.point}P  </span>
            </div>
        </div>
    `;
    const ParticipatedItem3 = `
        <div id="main1">
            <div class="one-container1">
                <a id="title1" href="../html/detailPage.html">  ${data.title}  </a>
            </div>
            <div class="two-container1">
                <span id="count1">${data.qcount}개 항목&nbsp;&nbsp;</span>
                <span id="type1">ㅣ&nbsp;&nbsp; D-DAY</span>
            </div>
            <div class="three-container1">
                <span id="point1">  ${data.point}P  </span>
            </div>
        </div>
    `;
    if(data.status =='CLOSED'){
        $SurveyList.insertAdjacentHTML('beforeend', ParticipatedItem2);
    }else if(data.dday == 0){
        $SurveyList.insertAdjacentHTML('beforeend', ParticipatedItem3);
    }else{
        $SurveyList.insertAdjacentHTML('beforeend', ParticipatedItem2);
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