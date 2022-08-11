const $SurveyList = document.querySelector("#SurveyList");
const $pointAll = document.querySelector(".pointAll");

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
        //.then((webResult) => console.log(webResult.result))
        .then((webResult) => webResult.result.map(item => pointListTemplate(item)))
        //.then((webResult) => console.log(webResult.result[0].point))
        .then((webResult) => slick())
        .catch((error) => console.log("error", error));
}

fetchSurvey();

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