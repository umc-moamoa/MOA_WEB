const $SurveyList = document.querySelector("#SurveyList");
var my_jwt = localStorage.getItem('x-access-token');
var receivedPostId='';

const fetchSurvey = () => {
    var requestOptions = {
        method: "GET",
        headers: {'x-access-token' : my_jwt,}
    };

    fetch(
        `http://seolmunzip.shop:9000/users/userPost`,
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) => {
            webResult.result.map(item => SurveyListTemplate(item));
            slick();
        })
        .catch((error) => console.log("error", error));
}

fetchSurvey();

function SurveyListTemplate (data) {
    receivedPostId = data.postId;
    const SurveyItem1 = `
    <div id="main1">
        <div class="one-container1">
            <a id="title1" href="../html/result.html">${data.postTitle}</a>
        </div>
        <div class="two-container1">
            <div class="box">
                <span id="count1">문항 수 </span>
                <span id="count">${data.qcount}개</span>
            </div>
            <div class="box">
                <span id="point1">포인트</span>
                <span id="point">${data.point}P</span>
            </div>
            <div class="box">
                <span id="day">마감 기간</span>
                <span id="deadline">D-${data.dday}</span></div>
            </div>
            <div class="box">
                <span id="num">참여 인원</span>
                <span id="num">${data.postResultCount}명</span>
            </div>
            <div class="flex-item1"><button id="deleteBtn" onClick="deletePost();">설문삭제</button></div>
        </div>
    </div>
    `;
    const SurveyItem2 = `
    <div id="main1">
        <div class="one-container1">
            <a id="title1" href="../html/result.html">${data.postTitle}</a>
        </div>
        <div class="two-container1">
            <div class="box">
                <span id="count1">문항 수 </span>
                <span id="count">${data.qcount}개</span>
            </div>
            <div class="box">
                <span id="point1">포인트</span>
                <span id="point">${data.point}P</span>
            </div>
            <div class="box">
                <span id="day">마감 기간</span>
                <span id="deadline">CLOSED</span></div>
            </div>
            <div class="box">
                <span id="num">참여 인원</span>
                <span id="num">${data.postResultCount}명</span>
            </div>
            <div class="flex-item1"><button id="deleteBtn" onClick="deletePost();">설문삭제</button></div>
        </div>
    </div>`;

    if(data.status =='ACTIVE'){
        $SurveyList.insertAdjacentHTML('beforeend', SurveyItem1);
    }else{
        $SurveyList.insertAdjacentHTML('beforeend', SurveyItem2);
    }
}

// 설문조사 삭제
function deletePost() {
    const fetchDetail = () => {
        fetch(`http://seolmunzip.shop:9000/posts/${receivedPostId}/status`, {
            method: "PATCH",
            headers: {'x-access-token' : my_jwt,}
        })
        .then((response) => response.json())
        .then((webResult) => {
            alert("설문조사가 삭제되었습니다.");
            var link="../html/mySurvey.html";
            location.href=link;
        })
        .catch((error) => console.log("error", error));
    }
    fetchDetail();
}

function slick(){
    $('#SurveyList').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        rows:3,
        infinite:false,
        prevArrow : $('.prev'), 
        nextArrow : $('.next'), 
    });
}
