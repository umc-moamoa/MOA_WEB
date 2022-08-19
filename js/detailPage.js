const $SurveyDetail = document.querySelector("#detailMain");
var my_jwt = localStorage.getItem('x-access-token');
var postuser_id;
var myPost;
var like;

const receivedPostId = location.href.split('?')[1];

const fetchDetail = () => {
    fetch(`http://seolmunzip.shop:9000/posts/content/${receivedPostId}`, {
        method: "GET",
        headers: {'x-access-token' : my_jwt,}
    })
        .then((response) => response.json())
        .then((webResult) => {
            SurveyDetailTemplate(webResult.result);
            console.log(webResult);
        })
        .catch((error) => console.log("error", error));
}

fetchDetail();

function SurveyDetailTemplate (data) {

    myPost = data.myPost;

    // myPost라면 설문 삭제 버튼
    const SurveyDetailItem1 = `
            <div id="mainTop">
            <div class="flex-container1">
                <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
                <div class="flex-item1"><button id="deleteBtn" onClick="deletePost();">설문삭제</button></div>
            </div>

            <div class="flex-container2">
                <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;</span></div>
                <div class="flex-item2"><span id="deadline">ㅣ&nbsp;&nbsp;D-${data.d_day}</span></div>
            </div>
            </div>

            <div id="mainBottom"> ${data.content} </div>

            <div class="join">
                <button id="joinBtn" onClick="location.href='../html/joinForm.html?${receivedPostId}'">설문&nbsp;&nbsp;참여</button>
            </div> 
    `;
    // myPost가 아니라면 하트 버튼
    // like가 true면 찬 하트 표시
    const SurveyDetailItem2 = `
            <div id="mainTop">
            <div class="flex-container1">
                <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
                <div class="flex-item1"><button id="heart"><img class="heartImg" src="../image/Heart2.png" width="40%" onclick="heart();"/></button></div>
            </div>

            <div class="flex-container2">
                <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;</span></div>
                <div class="flex-item2"><span id="deadline">ㅣ&nbsp;&nbsp;D-${data.d_day}</span></div>
            </div>
            </div>

            <div id="mainBottom"> ${data.content} </div>

            <div class="join">
                <button id="joinBtn" onClick="location.href='../html/joinForm.html?${receivedPostId}'">설문&nbsp;&nbsp;참여</button>
            </div> 
    `;
    // like가 false면 빈 하트 표시
    const SurveyDetailItem3 = `
    <div id="mainTop">
    <div class="flex-container1">
        <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
        <div class="flex-item1"><button id="heart"><img class="heartImg" src="../image/Heart.png" width="40%" onclick="heart();"/></button></div>
    </div>

    <div class="flex-container2">
        <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;</span></div>
        <div class="flex-item2"><span id="deadline">ㅣ&nbsp;&nbsp;D-${data.d_day}</span></div>
    </div>
    </div>

    <div id="mainBottom"> ${data.content} </div>

    <div class="join">
        <button id="joinBtn" onClick="location.href='../html/joinForm.html?${receivedPostId}'">설문&nbsp;&nbsp;참여</button>
    </div> 
`;
    
    if(myPost == true) {
        $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem1);
    } else if(myPost == false) { 
        if(data.like == true) {
            $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem2);
        } else if(data.like == false) {
            $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem3);
        }
    }
}

// 설문조사 삭제
function deletePost() {
    console.log("delete");

    const fetchDetail = () => {
        fetch(`http://seolmunzip.shop:9000/posts/${receivedPostId}/status`, {
            method: "PATCH",
            headers: {'x-access-token' : my_jwt,}
        })
        .then((response) => response.json())
        .then((webResult) => {
            alert("설문조사가 삭제되었습니다.");
            var link="../html/formList.html";
            location.href=link;
        })
        .catch((error) => console.log("error", error));
    }
    
    fetchDetail();
}

// 하트 처리
function heart(){
    const $heartImg = document.querySelector(".heartImg");
    const $heartImgCheck = document.querySelector(".heartImg").getAttribute( 'src' );

    if($heartImgCheck == "../image/Heart.png" || like == true){
        like = true;
        $heartImg.setAttribute('src',"../image/Heart2.png"); // 찬 하트
        interested_item_add();
        
    }else if($heartImgCheck == "../image/Heart2.png" || like == false){
        like = false;
        $heartImg.setAttribute('src',"../image/Heart.png"); // 빈 하트
        interested_item_delete();
    }
}

// 관심있는 설문조사 등록
function interested_item_add(){
    fetch(`http://seolmunzip.shop:9000/posts/interest/${receivedPostId}`, {
        method: "POST",
        headers: {'x-access-token' : my_jwt,}
    })
    .then((response) => response.json())
    .catch((error) => console.log("error", error))
}

// 관심있는 설문조사 삭제
function interested_item_delete(){
    fetch(`http://seolmunzip.shop:9000/posts/interest/${receivedPostId}`, {
        method: "DELETE",
        headers: {'x-access-token' : my_jwt,}
    })

    .then((response) => response.json())
    .catch((error) => console.log("error", error))
}