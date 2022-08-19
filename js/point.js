const $SurveyList1 = document.querySelector("#SurveyList1");
const $SurveyList2 = document.querySelector("#SurveyList2");
const $pointAll = document.querySelector(".pointAll");
var my_jwt = localStorage.getItem('x-access-token');
var value;

function selectedValue() {
    var select = document.getElementById('Stype');
    var value = select.options[select.selectedIndex].value; 
    return value;
}

// 최신순
const fetchSurvey1 = () => {
    var requestOptions = {
        method: "GET",
        headers: {'x-access-token' : my_jwt,}
    };
    value = selectedValue();
    fetch(
        `http://seolmunzip.shop:9000/users/point/recent`,
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) => {
            webResult.result.pointHistoryRecent.map(item => pointListTemplate2(item));
            pointListTemplate1(webResult.result);
            slick(value);
        })
        .catch((error) => console.log("error", error));
}
fetchSurvey1();

function pointListTemplate1(data){
    const pointItem = `<div class="state">${data.point}<span>P</span></div>`;

    $pointAll.insertAdjacentHTML('beforeend', pointItem);
}

function pointListTemplate2 (data) {
    const pointListItem = `
            if(${data.addAmount} == 0){
                var sub = document.getElementById("main1");
                sub.style.innerHTML=
                <div id="main1">
                    <div class="one-container1" style="background-color: #4E7FF2;">사용</div>
                    <div class="two-container1">${data.created}</div>
                    <div class="three-container1">-${data.subAmount}P</div>
                </div>
                ;
            }else if(${data.subAmount} == 0){
                var add = document.getElementById("main1");
                add.style.innerHTML=
                <div id="main1">
                    <div class="one-container1"  style="background-color: #9CC2FF;">적립</div>
                    <div class="two-container1">${data.created}</div>
                    <div class="three-container1">+${data.addAmount}P</div>
                </div>
                ;
    }
    `;
    
    $SurveyList1.insertAdjacentHTML('beforeend', pointListItem);
}

// 오래된 순
const fetchSurvey2 = () => {
    var requestOptions2 = {
        method: "GET",
        headers: {'x-access-token' : my_jwt,}
    };
    value = selectedValue();
    fetch(
        `http://seolmunzip.shop:9000/users/point/former`,
        requestOptions2
    )
        .then((response) => response.json())
        .then((webResult) => {
            webResult.result.pointHistoryFormer.map(item => pointListTemplate4(item));
            slick(value);
        })
        .catch((error) => console.log("error", error));
}

function pointListTemplate3(data){
    const pointItem = `<div class="state">${data.point}<span>P</span></div>`;

    $pointAll.insertAdjacentHTML('beforeend', pointItem);
}
function pointListTemplate4(data) {
    const pointListItem = `
            if(${data.addAmount} == 0){
                var sub = document.getElementById("main1");
                sub.style.innerHTML=
                <div id="main1">
                    <div class="one-container1" style="background-color: #4E7FF2;">사용</div>
                    <div class="two-container1">${data.created}</div>
                    <div class="three-container1">-${data.subAmount}P</div>
                </div>
                ;
            }else if(${data.subAmount} == 0){
                var add = document.getElementById("main1");
                add.style.innerHTML=
                <div id="main1">
                    <div class="one-container1"  style="background-color: #9CC2FF;">적립</div>
                    <div class="two-container1">${data.created}</div>
                    <div class="three-container1">+${data.addAmount}P</div>
                </div>
                ;
    }
    `;

    $SurveyList2.insertAdjacentHTML('beforeend', pointListItem);
}

function slick(){
    if( value == 1){
            $('#SurveyList1').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                rows:3,
                infinite:false,
                prevArrow : $('.prev'), 
                nextArrow : $('.next'), 
            });
    }else if(value == 2){
            $('#SurveyList2').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                rows:3,
                infinite:false,
                prevArrow : $('.prev'), 
                nextArrow : $('.next'), 
            });
    }
}

// 최신순, 오래된순 
var count2 = 0;
function showSurvey() { 
    value = selectedValue();
    if (value == 1){
        $('#SurveyList1').show();
        $('#SurveyList2').hide();
    }else if(value == 2){
        count2++;
        if(count2 == 1) {
            fetchSurvey2(); //최초 1회만 데이터 추가됨. 1->2->1->2 중복 추가 방지
        }
        $('#SurveyList1').hide();
        $('#SurveyList2').show();
    }
}