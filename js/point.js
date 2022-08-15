const $SurveyList = document.querySelector("#SurveyList");
const $pointAll = document.querySelector(".pointAll");

var my_jwt = localStorage.getItem('x-access-token');


// 최신순
const fetchSurvey = () => {
    var requestOptions = {
        method: "GET",
        headers: {'x-access-token' : my_jwt,}
    };

    fetch(
        `http://seolmunzip.shop:9000/users/point/recent`,
        requestOptions
    )
        .then((response) => response.json())
        //.then((webResult) => webResult.result.map(item => pointListTemplate(item)))
        .then((webResult) => console.log(webResult))
        //.then((webResult) => pointListTemplate(webResult.result))
        //.then((webResult) => console.log(webResult.result[0].point))
        .then((webResult) => slick())
        .catch((error) => console.log("error", error));
}

function pointListTemplate (data) {

    const pointItem = `<div class="state">${data.point}<span>P</span></div>`;

    // const pointListItem = `
    // <div id="main1">
    //     <div class="one-container1"></div>
    //     <div class="two-container1">${data.date}</div>
    //     <div class="three-container1">${data.point}P</div>
    // </div>
    // `;

    const pointListItem = `
            if(${data.addAmount} == 0){
                var sub = document.getElementById("main1");
                sub.style.innerHTML=
                <div id="main1">
                    <div class="one-container1" style="background-color: #4E7FF2;">사용</div>
                    <div class="two-container1">${data.date}</div>
                    <div class="three-container1">-${data.subAmount}P</div>
                </div>
                ;
            }else if(${data.subAmount} == 0){
                var add = document.getElementById("main1");
                add.style.innerHTML=
                <div id="main1">
                    <div class="one-container1"  style="background-color: #9CC2FF;">적립</div>
                    <div class="two-container1">${data.date}</div>
                    <div class="three-container1">+${data.addAmount}P</div>
                </div>
                ;
    }
    `;
    


$SurveyList.insertAdjacentHTML('beforeend', pointListItem);
$pointAll.insertAdjacentHTML('beforeend', pointItem);
}

// 오래된 순
const fetchSurvey2 = () => {
    var requestOptions2 = {
        method: "GET",
        headers: {'x-access-token' : my_jwt,}
    };

    fetch(
        `http://seolmunzip.shop:9000/users/point/former`,
        requestOptions2
    )
        .then((response) => response.json())
        //.then((webResult) => webResult.result.map(item => pointListTemplate2(item)))
        .then((webResult) => console.log(webResult))
        //.then((webResult) => pointListTemplate(webResult.result))
        //.then((webResult) => console.log(webResult.result[0].point))
        .then((webResult) => slick())
        .catch((error) => console.log("error", error));
}

function pointListTemplate2 (data) {

    const pointItem = `<div class="state">${data.point}<span>P</span></div>`;

    // const pointListItem = `
    // <div id="main1">
    //     <div class="one-container1"></div>
    //     <div class="two-container1">${data.date}</div>
    //     <div class="three-container1">${data.point}P</div>
    // </div>
    // `;

    const pointListItem = `
            if(${data.addAmount} == 0){
                var sub = document.getElementById("main1");
                sub.style.innerHTML=
                <div id="main1">
                    <div class="one-container1" style="background-color: #4E7FF2;">사용</div>
                    <div class="two-container1">${data.date}</div>
                    <div class="three-container1">-${data.subAmount}P</div>
                </div>
                ;
            }else if(${data.subAmount} == 0){
                var add = document.getElementById("main1");
                add.style.innerHTML=
                <div id="main1">
                    <div class="one-container1"  style="background-color: #9CC2FF;">적립</div>
                    <div class="two-container1">${data.date}</div>
                    <div class="three-container1">+${data.addAmount}P</div>
                </div>
                ;
    }
    `;
    


$SurveyList.insertAdjacentHTML('beforeend', pointListItem);
$pointAll.insertAdjacentHTML('beforeend', pointItem);
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

// 최신순, 오래된순 
function selectedValue() {
    var select = document.getElementById('Stype');
    var value = select.options[select.selectedIndex].value; 

    if (value == 1){
        fetchSurvey();
    }else{
        fetchSurvey2();
    }
}

selectedValue();