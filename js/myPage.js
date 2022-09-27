const $userInfo = document.querySelector("#userInfo");
var my_jwt = localStorage.getItem('x-access-token');

const fetchUser = () => {
    fetch(
        "http://seolmunzip.shop:9000/users",{
            method: "GET",
            headers: {'x-access-token' : my_jwt,}
        }
    )
        .then((response) => response.json())
        .then((webResult) => userTemplate(webResult.result))
        .catch((error) => console.log("error", error));
}

fetchUser();

function userTemplate(data) {
    const userInfoItem = 
    `<div class="flex-nickname">${data.nickName}<div id="님">&nbsp;&nbsp;님</div>
    </div>

    <div class="flex-container-icon">
        <div class="flex-container-icon-sub1">
            <img src="../image/Vector.png" width="28px">
            <div class="category1">포인트</div>
        </div>
        <div class="state">${data.point}<span>P</span></div>
    </div>

    <div class="flex-container-icon" id="icon_bottom_line">
        <div class="flex-container-icon-sub1">
            <img src="../image/Vector (1).png" width="25px">
            <div class="category1">&nbsp;진행 중인 설문조사</div>
        </div>
        <div class="state">${data.postCount}<span>개</span></div>
    </div>`;

$userInfo.insertAdjacentHTML('beforeend', userInfoItem);

}

// 회원 탈퇴 alert
function quit_alert() {
    Swal.fire({
        title: '탈퇴하시겠습니까?',
        // text: "삭제하시겠습니까?",
        // icon: 'warning',
        customClass: 'swal-wide',
        showCancelButton: true,
        confirmButtonColor: '#4E7FF2',
        cancelButtonColor: '#DBDBDB',
        confirmButtonText: '예',
        cancelButtonText: '아니요'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteUser();
        }
    })
}

function deleteUser() {
    fetch(
        "http://seolmunzip.shop:9000/users",{
            method: "DELETE",
            headers: {'x-access-token' : my_jwt,}
        }
    )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);

            change_logout();
            logout();
            
            Swal.fire({
                title: '탈퇴되었습니다.',
                customClass: 'swal-wide',
                confirmButtonColor: '#4E7FF2',
                cancelButtonColor: '#DBDBDB',
                confirmButtonText: '예'
            }).then((result) => {
                if (result.isConfirmed) {
                    var link="../html/main.html";
                    location.href=link;
                }
            })

           
            }
        )
        .catch((error) => console.log("error", error));
}