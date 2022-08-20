const $resultList = document.querySelector(".resultContainer");
const $textResultBox = document.querySelector("#textResultBox");
const $subMain = document.querySelector(".subMain");

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
  if(data.format == 1) { 
    
    var resultQuestion = `&nbsp;${data.question}`;
    var resultTemplate = `
      <div class="sub-container">
        <div class="questionTitle">
        </div>
      </div>
    `
    var resultProgress = `
    <div class="resultContainer">
    <div>Figma&nbsp;</div>
        <div class="progress-bar">           
            <div class="progress"> </div>
        </div>
    <div>&nbsp;72%</div>
    </div>`
    $subMain.insertAdjacentHTML('beforeend', resultTemplate);
    const $subContainer = document.querySelector(".sub-container");
    const $questionTitle = document.querySelector(".questionTitle");
    for(i=0; i<(data.getResultItems).length; i++){
      var dataCase = data.case1;
      var resultProgress = `
      <div class="resultContainer">
      <div>${data.getResultItems[i].item}&nbsp;-&nbsp;${data.case1}%</div>
          <div class="progress-bar">           
              <div class="progress"> </div>
          </div>
      </div>`
    $subContainer.insertAdjacentHTML('beforeend', resultProgress);
    graphAnimation(dataCase);
    }
    $questionTitle.insertAdjacentHTML('beforeend', resultQuestion);
    
}
  else if(data.format == 2) {
    var resultQuestion = `&nbsp;${data.question}`;
    var resultTemplate = `
      <div class="sub-container2">
        <div class="questionTitle2">
        </div>
      </div>
    `
    var resultProgress = `
    <div class="resultContainer">
      <div>Figma&nbsp;-&nbsp;72%</div>
          <div class="progress-bar">           
              <div class="progress"> </div>
          </div>
    </div>`
    $subMain.insertAdjacentHTML('beforeend', resultTemplate);
    const $subContainer = document.querySelector(".sub-container2");
    const $questionTitle = document.querySelector(".questionTitle2");
    for(i=0; i<(data.getResultItems).length; i++){
      var dataCase = data.case1;
      var resultProgress = `
      <div class="resultContainer">
      <div>${data.getResultItems[i].item}&nbsp;-&nbsp;${data.case1}%</div>
          <div class="progress-bar">           
              <div class="progress"> </div>
          </div>
      </div>`
    $subContainer.insertAdjacentHTML('beforeend', resultProgress);
    graphAnimation(dataCase);
    }
    $questionTitle.insertAdjacentHTML('beforeend', resultQuestion);
  }
  else if(data.format == 3) {
    var resultQuestion = `&nbsp;${data.question}`;
    var resultTemplate = `
      <div class="sub-container3">
        <div class="questionTitle3">
        </div>
        <div class="textResultBox">
        </div>
      </div>
    `
    var resultText = `
    <div id="textResultItem">010-1234-5678</div>`
    $subMain.insertAdjacentHTML('beforeend', resultTemplate);
    const $textResultBox = document.querySelector(".textResultBox");
    const $questionTitle = document.querySelector(".questionTitle3");
    for(i=0; i<(data.getResultStatisticsRes).length;i++){
      var resultText = `
      <div id="textResultItem">${data.getResultStatisticsRes[i].result}</div>`
      $textResultBox.insertAdjacentHTML('beforeend', resultText);
    }
    $questionTitle.insertAdjacentHTML('beforeend', resultQuestion);
  }
  else if(data.format == 4) {
    var resultQuestion = `&nbsp;${data.question}`;
    var resultTemplate = `
      <div class="sub-container4">
        <div class="questionTitle4">
        </div>
        <div class="textResultBox2">
        </div>
      </div>
    `
  
    $subMain.insertAdjacentHTML('beforeend', resultTemplate);
    const $textResultBox = document.querySelector(".textResultBox2");
    const $questionTitle = document.querySelector(".questionTitle4");
    for(i=0; i<(data.getResultStatisticsRes).length;i++){
      var resultText = `
      <div id="textResultItem">${data.getResultStatisticsRes[i].result}</div>`
      $textResultBox.insertAdjacentHTML('beforeend', resultText);
    }
    $questionTitle.insertAdjacentHTML('beforeend', resultQuestion);
  }
}

// 통계 그래프 애니메이션 효과
function graphAnimation(percent) {
  const $bars = document.querySelectorAll(".progress");

  for (let bar of $bars) {
    let t = 0
    let totalMinwon = percent;
    bar.style.width = 0
    const barAnimation = setInterval(() => {
      bar.style.width =  t + '%'
      t++ >= totalMinwon && clearInterval(barAnimation)
    }, 10)
    }
}