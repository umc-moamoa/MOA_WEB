const $SurveyDetail = document.querySelector("#detailMain");

const fetchDetail = () => {
    var requestOptions = {
        method: "GET",
    };

    fetch(
        `http://umcsom.shop:9000/posts/content/5`,
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) => webResult.result.map(item => SurveyDetailTemplate(item)))
        .catch((error) => console.log("error", error));
}

fetchDetail();

function SurveyDetailTemplate (data) {
    const SurveyDetailItem = `
            <div id="mainTop">
            <div class="flex-container1">
                <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
                <div class="flex-item1"><span id="date">7/1 16:36</span></div>
                <div class="flex-item1"><button id="heart"><img src="../image/Heart.png" width="40%"/></button></div>
            </div>

            <div class="flex-container2">
                <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
                <div class="flex-item2"><span id="types">|&nbsp;&nbsp;&nbsp;&nbsp;선택형</span></div>
            </div>
            </div>

            <div id="mainBottom"> ${data.content} </div>

            <div class="join">
                <button id="joinBtn" onClick="location.href='moa2.html'">설문&nbsp;&nbsp;참여</button>
            </div> 
    `;

$SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem);
}