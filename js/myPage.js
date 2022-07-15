const $userInfo = document.querySelector("#userInfo");

const fetchUser = () => {
    var requestOptions = {
        method: "GET",
    };

    fetch(
        "http://umcsom.shop:9000/users?userId=1",
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) => webResult.result.map(item => userTemplate(item)))
        .catch((error) => console.log("error", error));
}

fetchUser();

function userTemplate(data) {
    const userInfoItem = 
    `<div class="flex-nickname">
    <div>${data.nickName}</div><div id="님">&nbsp;&nbsp;님</div>
    </div>

    <div class="flex-container-icon">
        <div class="flex-container-icon-sub1">
            <img src="../image/Vector.png" width="30%"><div class="category1">&nbsp;&nbsp;&nbsp;&nbsp;포인트</div>
        </div>
        <div class="state">${data.point}<span>P</span></div>
    </div>

    <div class="flex-container-icon" id="icon_bottom_line">
        <div class="flex-container-icon-sub1">
            <img src="../image/Vector (1).png" width="15%"><div class="category1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;진행 중인 설문조사</div>
        </div>
        <div class="state">${data.postCount}<span>개</span></div>
    </div>`;

$userInfo.insertAdjacentHTML('beforeend', userInfoItem);

}