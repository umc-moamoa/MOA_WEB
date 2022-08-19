const $SurveyDetail = document.querySelector("#detailMain");
var my_jwt = localStorage.getItem('x-access-token');
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
        })
        .catch((error) => console.log("error", error));
}

fetchDetail();

function SurveyDetailTemplate (data) {

    const SurveyDetailItem_closed_myPost = `
        <div id="mainTop">
        <div class="flex-container1">
            <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
            <div class="flex-item1"><button id="deleteBtn" onClick="deletePost();">설문삭제</button></div>
        </div>

        <div class="flex-container2">
            <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;ㅣ</span></div>
            <div class="flex-item2"><span id="deadline">&nbsp;&nbsp; CLOSED</span></div>
        </div>
        </div>

        <div id="mainBottom"> ${data.content} </div>

        <div class="join">
            <button id="joinBtn" onClick="closed_alert();">마감된&nbsp;&nbsp;설문</button>
        </div> 
    `;
    const SurveyDetailItem_closed_like = `
        <div id="mainTop">
        <div class="flex-container1">
            <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
            <div class="flex-item1"><button id="heart"><img class="heartImg" src="../image/Heart2.png" width="40%" onclick="heart();"/></button></div>
        </div>

        <div class="flex-container2">
            <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;ㅣ</span></div>
            <div class="flex-item2"><span id="deadline">&nbsp;&nbsp; CLOSED</span></div>
        </div>
        </div>

        <div id="mainBottom"> ${data.content} </div>

        <div class="join">
            <button id="joinBtn" onClick="closed_alert();">마감된&nbsp;&nbsp;설문</button>
        </div> 
    `;
    const SurveyDetailItem_closed_nolike = `
        <div id="mainTop">
        <div class="flex-container1">
            <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
            <div class="flex-item1"><button id="heart"><img class="heartImg" src="../image/Heart.png" width="40%" onclick="heart();"/></button></div>
        </div>

        <div class="flex-container2">
            <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;ㅣ</span></div>
            <div class="flex-item2"><span id="deadline">&nbsp;&nbsp;CLOSED</span></div>
        </div>
        </div>

        <div id="mainBottom"> ${data.content} </div>

        <div class="join">
            <button id="joinBtn" onClick="closed_alert();">마감된&nbsp;&nbsp;설문</button>
        </div> 
    `;
    const SurveyDetailItem_dday_myPost = `
        <div id="mainTop">
        <div class="flex-container1">
            <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
            <div class="flex-item1"><button id="deleteBtn" onClick="deletePost();">설문삭제</button></div>
        </div>

        <div class="flex-container2">
            <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;ㅣ</span></div>
            <div class="flex-item2"><span id="deadline">&nbsp;&nbsp; D-DAY</span></div>
        </div>
        </div>

        <div id="mainBottom"> ${data.content} </div>

        <div class="join">
            <button id="joinBtn" onClick="location.href='../html/joinForm.html?${receivedPostId}'">설문&nbsp;&nbsp;참여</button>
        </div> 
    `;
    const SurveyDetailItem_dday_like = `
        <div id="mainTop">
        <div class="flex-container1">
            <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
            <div class="flex-item1"><button id="heart"><img class="heartImg" src="../image/Heart2.png" width="40%" onclick="heart();"/></button></div>
        </div>

        <div class="flex-container2">
            <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;ㅣ</span></div>
            <div class="flex-item2"><span id="deadline">&nbsp;&nbsp; D-DAY</span></div>
        </div>
        </div>

        <div id="mainBottom"> ${data.content} </div>

        <div class="join">
            <button id="joinBtn" onClick="location.href='../html/joinForm.html?${receivedPostId}'">설문&nbsp;&nbsp;참여</button>
        </div> 
    `;
    const SurveyDetailItem_dday_nolike = `
        <div id="mainTop">
        <div class="flex-container1">
            <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
            <div class="flex-item1"><button id="heart"><img class="heartImg" src="../image/Heart.png" width="40%" onclick="heart();"/></button></div>
        </div>

        <div class="flex-container2">
            <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;ㅣ</span></div>
            <div class="flex-item2"><span id="deadline">&nbsp;&nbsp;D-DAY</span></div>
        </div>
        </div>

        <div id="mainBottom"> ${data.content} </div>

        <div class="join">
            <button id="joinBtn" onClick="location.href='../html/joinForm.html?${receivedPostId}'">설문&nbsp;&nbsp;참여</button>
        </div> 
    `;

    const SurveyDetailItem_d_myPost = `
        <div id="mainTop">
        <div class="flex-container1">
            <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
            <div class="flex-item1"><button id="deleteBtn" onClick="deletePost();">설문삭제</button></div>
        </div>

        <div class="flex-container2">
            <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;ㅣ</span></div>
            <div class="flex-item2"><span id="deadline">&nbsp;&nbsp; D-${data.dday}</span></div>
        </div>
        </div>

        <div id="mainBottom"> ${data.content} </div>

        <div class="join">
            <button id="joinBtn" onClick="location.href='../html/joinForm.html?${receivedPostId}'">설문&nbsp;&nbsp;참여</button>
        </div> 
    `;
    const SurveyDetailItem_d_like = `
        <div id="mainTop">
        <div class="flex-container1">
            <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
            <div class="flex-item1"><button id="heart"><img class="heartImg" src="../image/Heart2.png" width="40%" onclick="heart();"/></button></div>
        </div>

        <div class="flex-container2">
            <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;ㅣ</span></div>
            <div class="flex-item2"><span id="deadline">&nbsp;&nbsp; D-${data.dday}</span></div>
        </div>
        </div>

        <div id="mainBottom"> ${data.content} </div>

        <div class="join">
            <button id="joinBtn" onClick="location.href='../html/joinForm.html?${receivedPostId}'">설문&nbsp;&nbsp;참여</button>
        </div> 
    `;
    const SurveyDetailItem_d_nolike = `
        <div id="mainTop">
        <div class="flex-container1">
            <div class="flex-item1"><span id="detailTitle"> ${data.title} </span></div>
            <div class="flex-item1"><button id="heart"><img class="heartImg" src="../image/Heart.png" width="40%" onclick="heart();"/></button></div>
        </div>

        <div class="flex-container2">
            <div class="flex-item2"><span id="items">${data.qcount}개의 항목&nbsp;&nbsp;ㅣ</span></div>
            <div class="flex-item2"><span id="deadline">&nbsp;&nbsp;D-${data.dday}</span></div>
        </div>
        </div>

        <div id="mainBottom"> ${data.content} </div>

        <div class="join">
            <button id="joinBtn" onClick="location.href='../html/joinForm.html?${receivedPostId}'">설문&nbsp;&nbsp;참여</button>
        </div> 
    `

    if(data.status =='CLOSED'){
        if(data.myPost == true){ // 설문 삭제
            $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem_closed_myPost);
        }else if(data.myPost == false && data.like == true ){ // 찬하트
            $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem_closed_like);
        }else if(data.myPost == false && data.like == false){ // 빈하트
            $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem_closed_nolike);
        }
    }else if(data.dday == 0){
        if(data.myPost == true){ // 설문 삭제
            $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem_dday_myPost);
        }else if(data.myPost == false && data.like == true ){ // 찬하트
            $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem_dday_like);
        }else if(data.myPost == false && data.like == false){ // 빈하트
            $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem_dday_nolike);
        }
    }else{
        if(data.myPost == true){ // 설문 삭제
            $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem_d_myPost);
        }else if(data.myPost == false && data.like == true ){ // 찬하트
            $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem_d_like);
        }else if(data.myPost == false && data.like == false){ // 빈하트
            $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem_d_nolike);
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

function closed_alert(){
    alert("이미 마감된 설문조사입니다.");
}