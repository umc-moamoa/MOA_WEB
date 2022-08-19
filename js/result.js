const receivedPostId = location.href;
console.log(receivedPostId);

const fetchResult = () => {
  var requestOptions = {
      method: "Get",
  };

  fetch(
      "http://seolmunzip.shop:9000/results/52",
      requestOptions
  )
      .then((response) => response.json())
      .then((webResult) =>console.log(webResult) )
      .then((webResult) => slick())
      .catch((error) => console.log("error", error));
}

fetchResult();

const fetchResultDetailId = () => {
  var requestOptions = {
      method: "Get",
  };

  fetch(
      "http://seolmunzip.shop:9000/results/repeat/26",
      requestOptions
  )
      .then((response) => response.json())
      .then((webResult) =>console.log(webResult) )
      .then((webResult) => slick())
      .catch((error) => console.log("error", error));
}

fetchResultDetailId();

function resultTemplate(data) {

}

// 통계 그래프 애니메이션 효과
const $bar = document.querySelector(".progress");
let t = 0
let totalMinwon = 72
$bar.style.width = 0
const barAnimation = setInterval(() => {
  $bar.style.width =  t + '%'
  t++ >= totalMinwon && clearInterval(barAnimation)
}, 10)