const $SurveyDetail = document.querySelector("#detailMain");
const $data_id='';
const $user_id='';

const fetchDetail = () => {

    fetch(`http://umcsom.shop:9000/posts/content/1`, {
        method: "GET",
        headers: {Authorization: `Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjIsImlhdCI6MTY1OTg3NzI5OCwiZXhwIjoxNjYxMzQ4NTI3fQ.o0mva-CqHNi_keT__IPIfjsxdfmAlT-96fHtBF1ey_E`}
    })
        .then((response) => response.json())
        .then((webResult) => console.log(webResult.result))
        // .then((webResult) => webResult.result.map(item => SurveyDetailTemplate(item)))
       /*  .then((webResult2) => interested_item(webResult2)) */
        .catch((error) => console.log("error", error));


}

fetchDetail();

function SurveyDetailTemplate (data) {
    const SurveyDetailItem = `
            <div id="mainTop">
            <div class="flex-container1">
                <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
                <div class="flex-item1"><span id="date">7/1 16:36</span></div>
                <div class="flex-item1"><button id="heart"><img class="heartImg" src="../image/Heart.png" width="40%" onclick="heart();"/></button></div>
            </div>

            <div class="flex-container2">
                <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;</span></div>
                <div class="flex-item2"><span id="deadline">ㅣ&nbsp;&nbsp;D-${data.deadline}</span></div>
            </div>
            </div>

            <div id="mainBottom"> ${data.content} </div>

            <div class="join">
                <button id="joinBtn" onClick="location.href='../html/joinForm.html'">설문&nbsp;&nbsp;참여</button>
            </div> 
    `;
    data_id=`${data.postUserId}`;
  /*   user_id=`${data.userId}`; */

$SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem);
}

// 하트 처리
function heart(){
    const $heartImg = document.querySelector(".heartImg");
    const $heartImgCheck = document.querySelector(".heartImg").getAttribute( 'src' );
    
    if($heartImgCheck == "../image/Heart.png"){
        $heartImg.setAttribute('src',"../image/Heart2.png"); // 찬 하트
        interested_item();
        
    }else{
        $heartImg.setAttribute('src',"../image/Heart.png"); // 빈 하트

    }
}

// 관심있는 설문조사 등록
function interested_item(){
    const item = {
        postId : data_id,
        userId : 1
        /* 나중에 userId에 로그인 정보를 값으로 주면 됨 */
    }
    fetch(`http://umcsom.shop:9000/posts/${item.postId}/${item.userId}`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    })

    .then((response) => response.json())
    .catch((error) => console.log("error", error))
}