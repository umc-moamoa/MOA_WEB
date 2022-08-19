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
            webResult.result.map(item => InterestListTemplate(item));
            slick();
        })
        .catch((error) => console.log("error", error));
}

fetchInterest();

function InterestListTemplate(data) {
    const postId = data.postId;
    const InterestItem1 = `
        <div id="main1">
            <div class="one-container1">
                <a id="title1" href="../html/detailPage.html?${postId}">${data.title}</a>
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
    const InterestItem2 = `
        <div id="main1">
            <div class="one-container1">
                <a id="title1" href="../html/detailPage.html?${postId}">${data.title}</a>
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
    const InterestItem3 = `
        <div id="main1">
            <div class="one-container1">
                <a id="title1" href="../html/detailPage.html?${postId}">${data.title}</a>
            </div>
            <div class="two-container1">
                <span id="count1">${data.qcount}개 항목&nbsp;&nbsp; ㅣ</span>
                <span id="type1" style="color: #9CC2FF;">&nbsp;&nbsp; D-DAY</span>
            </div>
            <div class="three-container1">
                <span id="point1">  ${data.point}P  </span>
            </div>
        </div>
    `;
    if(data.status =='CLOSED'){
        $SurveyList.insertAdjacentHTML('beforeend', InterestItem2);
    }else if(data.dday == 0){
        $SurveyList.insertAdjacentHTML('beforeend', InterestItem3);
    }else{
        $SurveyList.insertAdjacentHTML('beforeend', InterestItem1);
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

