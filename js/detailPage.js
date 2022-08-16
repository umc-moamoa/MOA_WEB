const $SurveyDetail = document.querySelector("#detailMain");
var my_jwt = localStorage.getItem('x-access-token');
var postuser_id='';
var myPost='';
var like='';
var post_id='';


const fetchDetail = () => {
    var item = {
        postId : post_id //postuser_id을 postId로 변경해야함
        // 서버에서 postId를 보내주거나 formList.js에 있는 postId를 저장해야함.. -> 쉽지 않다
        //postId : 15
    };
    fetch(`http://seolmunzip.shop:9000/posts/content/${item.postId}`, {
        method: "GET",
        headers: {'x-access-token' : my_jwt,}
    })
        .then((response) => response.json())
        .then((webResult) => {
            //webResult.result.map(item => SurveyDetailTemplate(item));
            SurveyDetailTemplate(webResult.result);
            console.log(webResult.result);
        })
        //.then((webResult) => heartView())
        .catch((error) => console.log("error", error));
}

fetchDetail();

function SurveyDetailTemplate (data) {
    const SurveyDetailItem = `
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
                <button id="joinBtn" onClick="location.href='../html/joinForm.html'">설문&nbsp;&nbsp;참여</button>
            </div> 
    `;
    postuser_id=`${data.postUserId}`;
    myPost=`${data.myPost}`;
    like=`${data.like}`;
    
    $SurveyDetail.insertAdjacentHTML('beforeend', SurveyDetailItem);
}

function heartView() {
    if(myPost == true){
        var heart = document.getElementById("heart");
        heart.style.display = 'none';
    }
}

// 하트 처리
function heart(){
    const $heartImg = document.querySelector(".heartImg");
    const $heartImgCheck = document.querySelector(".heartImg").getAttribute( 'src' );

    if($heartImgCheck == "../image/Heart.png" || like== true){
        $heartImg.setAttribute('src',"../image/Heart2.png"); // 찬 하트
        interested_item_add();
        
    }else if($heartImgCheck == "../image/Heart2.png" || like==false){
        $heartImg.setAttribute('src',"../image/Heart.png"); // 빈 하트
        interested_item_delete();
    }
}

// 관심있는 설문조사 등록
function interested_item_add(){
    const item = {
        postId : postuser_id //postuser_id을 postId로 변경해야함
    }
    fetch(`http://seolmunzip.shop:9000/posts/interest/${item.postId}`, {
        method: "POST",
        headers: {'x-access-token' : my_jwt,},
        body: JSON.stringify(item)
    })

    .then((response) => response.json())
    //.then((response) => console.log("add"))
    .catch((error) => console.log("error", error))
}

// 관심있는 설문조사 삭제
function interested_item_delete(){
    const item = {
        postId : postuser_id //postuser_id을 postId로 변경해야함
    }
    fetch(`http://seolmunzip.shop:9000/posts/interest/${item.postId}`, {
        method: "DELETE",
        headers: {'x-access-token' : my_jwt,},
        body: JSON.stringify(item)
    })

    .then((response) => response.json())
    //.then((response) => console.log("delete"))
    .catch((error) => console.log("error", error))
}