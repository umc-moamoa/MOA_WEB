
const $SurveyList = document.querySelector("#SurveyList");

const $detailTitle = document.querySelector("#detailTitle");
const $mainBottom = document.querySelector("#mainBottom");

const fetchSurvey = () => {
    var requestOptions = {
        method: "GET",
    };

    fetch(
        "http://umcsom.shop:9000/posts?categoryId=1",
        requestOptions
    )
        .then((response) => response.json())
        .then((response) => console.log((JSON.parse(response)).result))

}


fetchSurvey();

// function SurveyListTemplate (data) {
//     const SurveyItem = `<div id="main1">
//                             <div class="one-container1">
//                                 <a id="title1" href="../html/moa1.html" data-id=${data.result.postId}>  ${data.result.title}  </a>
//                             </div>
//                             <div class="two-container1">
//                                 <span id="count1">11개 항목</span>
//                                 <span id="type1">선택형</span>
//                             </div>
//                             <div class="three-container1">
//                                 <span id="point1">  ${data.result.point}  </span>
//                             </div>
//                         </div>
//     `;

//     const dTitle = `<span>  ${data.result.title}  </span>
//     `;
    
//     const mBottom = `  ${data.result.content}  
//     `;

// $SurveyList.insertAdjacentHTML('beforeend', SurveyItem);
// $detailTitle.insertAdjacentHTML('beforeend', dTitle);
// $mainBottom.insertAdjacentHTML('beforeend', mBottom);
// }
