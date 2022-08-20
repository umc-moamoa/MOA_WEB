const $resultList = document.querySelector(".resultContainer");
const $textResultBox = document.querySelector("#textResultBox");
const $subContainer = document.querySelector(".sub-container");
const $postDetail = document.querySelector(".flex-sTitle");
var my_jwt = localStorage.getItem('x-access-token');

const receivedPostId = location.href.split('?')[1];
console.log(receivedPostId);

//설문조사의 총 질문 수 파악
const fetchResultDetailId = () => {
  var requestOptions = {
      method: "Get",
  };

  fetch(
      `http://seolmunzip.shop:9000/results/repeat/52`,
      requestOptions
  )
      .then((response) => response.json())
      .then((webResult) =>{
        console.log(webResult);
        putResultTemplate(webResult.result);
      })
      .catch((error) => console.log("error", error));
}

function putResultTemplate(data) {
  for(i = data.startPostDetailId; i <= data.endPostDetailId; i++){
      fetchResult(i);
    }
  }

fetchResultDetailId();

//문항별 결과 
function fetchResult(postDetailId) {
  var requestOptions = {
          method: "Get",
      };

      fetch(
        `http://seolmunzip.shop:9000/results/${postDetailId}`,
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) =>{
          console.log(webResult.result);
          resultTemplate(webResult.result);
          // for(i = 0; i<5; i++ ){
          //   var caseStr = 'case'+i;
          //   console.log(typeof caseStr);
          //   console.log(caseStr);
          //   console.log(webResult.result.case2)
          // }
        })
        .catch((error) => console.log("error", error));
}

//결과 템플릿
function resultTemplate(data) {
  if(data.format == 1 || data.format == 2) { 
    var resultQuestion = `<div class="questionTitle">${data.question}</div>`;
    $subContainer.insertAdjacentHTML('beforeend', resultQuestion);
    for(i=0; i<(data.getResultItems).length; i++){
      var dataCase = data.case1;
      var resultProgress = `
      <div class="resultContainer">
        <div>${data.getResultItems[i].item}&nbsp;-&nbsp;${data.case1}%</div>
          <div class="progress-bar">           
            <div class="progress" style="width:${data.case1}%;"> </div>
          </div>
      </div>`
    $subContainer.insertAdjacentHTML('beforeend', resultProgress);
    }
}
  else {
    var resultQuestion = `<div class="questionTitle">${data.question}</div>`;
    $subContainer.insertAdjacentHTML('beforeend', resultQuestion);
    for(i=0; i<(data.getResultStatisticsRes).length;i++){
      var resultText = `
      <div id="textResultItem">${data.getResultStatisticsRes[i].result}</div>`
      $subContainer.insertAdjacentHTML('beforeend', resultText);
    }
  }
}

//post detail 가져오기
function fetchTitle(postId) {
  var requestOptions = {
          method: "Get",
          headers: {'x-access-token' : my_jwt,}
      };

      fetch(
        `http://seolmunzip.shop:9000/posts/content/${postId}`,
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) =>{
          titleTemplate(webResult);
        })
        .catch((error) => console.log("error", error));
}

function fetchCount(postId) {
  var requestOptions = {
          method: "Get",
      };

      fetch(
        `http://seolmunzip.shop:9000/results/count/${postId}`,
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) =>{
          countTemplate(webResult);
        })
        .catch((error) => console.log("error", error));
}

fetchTitle(receivedPostId);
fetchCount(receivedPostId);

function titleTemplate(data){
  var title = `<div id="sTitle">${data.result.title}</div>`
  $postDetail.insertAdjacentHTML('afterbegin', title);
}

function countTemplate(data){
  var count = `<div id="peopleNum"><img src="../image/Group 599.png">&nbsp;${data.result.count}명 응답</div>`
  $postDetail.insertAdjacentHTML('beforeend', count);
}