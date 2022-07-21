const $SurveyList = document.querySelector("#SurveyList");

const $detailTitle = document.querySelector("#detailTitle");
const $mainBottom = document.querySelector("#mainBottom");

const fetchSurvey = () => {
    var requestOptions = {
        method: "GET",
    };

    fetch(
        `http://umcsom.shop:9000/posts?categoryId=1`,
        requestOptions
    )
        .then((response) => response.json())
        //.then((webResult) => console.log(webResult.result))
        .then((webResult) => webResult.result.map(item => SurveyListTemplate(item)))
        .catch((error) => console.log("error", error));
}

fetchSurvey();

function SurveyListTemplate (data) {
    const SurveyItem = `<div id="main1">
                            <div class="one-container1">
                                <a id="title1" href="../html/moa1.html" data-id=${data.postId}>  ${data.title}  </a>
                            </div>
                            <div class="two-container1">
                                <span id="count1">11개 항목</span>
                                <span id="type1">선택형</span>
                            </div>
                            <div class="three-container1">
                                <span id="point1">  ${data.point}  </span>
                            </div>
                        </div>
    `;

    // const dTitle = `<span>  ${data.snippet.title}  </span>
    // `;
    
    // const mBottom = `  ${data.snippet.title}  
    // `;

$SurveyList.insertAdjacentHTML('beforeend', SurveyItem);
// $detailTitle.insertAdjacentHTML('beforeend', dTitle);
// $mainBottom.insertAdjacentHTML('beforeend', mBottom);
}

// display, start
//https://developers.naver.com/docs/serviceapi/search/web/web.md#%EC%9B%B9%EB%AC%B8%EC%84%9C
