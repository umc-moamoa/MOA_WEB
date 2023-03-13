// 변수 선언
var access_token = localStorage.getItem('x-access-token');
var refresh_token = localStorage.getItem('x-refresh-token');
const link_login = document.querySelector(".link_login");
const link_logout = document.querySelector(".link_logout");

// 100 : 로그아웃 상태
// 200 : 소셜로그인 상태
// 300 : 자체로그인 상태
localStorage.setItem('socialLogin', 100);

// 로그인 확인
function change_logout(){
    localStorage.setItem('socialLogin', 100);
    if(access_token != null){  // 자체 로그인 된 상태
        $(".link_login").css("display","none");
        $(".link_logout").css("display","block");
        $(".link_logout").css("color","#9CC2FF");
    }else{ // 로그아웃 상태
        $(".link_login").css("display","block");
        $(".link_logout").css("display","none");
    }
}
change_logout();

// 로그인 후 메인으로 이동
function login(){
    var link="../main.html";
    location.href=link;
}

// 로그아웃
function logout(){
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
    localStorage.clear();
    localStorage.setItem('socialLogin', 100);
}

// 마이페이지 로그인 제한
function login_alert1() {
    if(access_token == undefined || refresh_token == undefined){
        Swal.fire({
            title: '회원 전용입니다.',
            text: "로그인하시겠습니까?",
            // icon: 'warning',
            customClass: 'swal-wide',
            showCancelButton: true,
            confirmButtonColor: '#4E7FF2',
            cancelButtonColor: '#DBDBDB',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                var link="login.html";
                location.href=link;
            }
        })
    }else{
        var link="myPage.html";
        location.href=link;
    }
}
// 새 설문 만들기 로그인 제한
function login_alert2() {
    if(access_token == undefined || refresh_token == undefined){
        Swal.fire({
            title: '회원 전용입니다.',
            text: "로그인하시겠습니까?",
            // icon: 'warning',
            customClass: 'swal-wide',
            showCancelButton: true,
            confirmButtonColor: '#4E7FF2',
            cancelButtonColor: '#DBDBDB',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                var link="login.html";
                location.href=link;
            }
        })
    }else{
        var link="makeForm.html";
        location.href=link;
    }
}

// 내가 만든 설문 로그인 제한
function login_alert3() {
    if(access_token == undefined || refresh_token == undefined){
        Swal.fire({
            title: '회원 전용입니다.',
            text: "로그인하시겠습니까?",
            // icon: 'warning',
            customClass: 'swal-wide',
            showCancelButton: true,
            confirmButtonColor: '#4E7FF2',
            cancelButtonColor: '#DBDBDB',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                var link="login.html";
                location.href=link;
            }
        })
    }else{
        var link="mySurvey.html";
        location.href=link;
    }
}

// 관심있는 설문조사 로그인 제한
function login_alert4() {
    if(access_token == undefined || refresh_token == undefined){
        Swal.fire({
            title: '회원 전용입니다.',
            text: "로그인하시겠습니까?",
            // icon: 'warning',
            customClass: 'swal-wide',
            showCancelButton: true,
            confirmButtonColor: '#4E7FF2',
            cancelButtonColor: '#DBDBDB',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                var link="login.html";
                location.href=link;
            }
        })
    }else{
        var link="interestedSurvey.html";
        location.href=link;
    }
}

// 참여한 설문조사 로그인 제한
function login_alert5() {
    if(access_token == undefined || refresh_token == undefined){
        Swal.fire({
            title: '회원 전용입니다.',
            text: "로그인하시겠습니까?",
            // icon: 'warning',
            customClass: 'swal-wide',
            showCancelButton: true,
            confirmButtonColor: '#4E7FF2',
            cancelButtonColor: '#DBDBDB',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                var link="login.html";
                location.href=link;
            }
        })
    }else{
        var link="participatedSurvey.html";
        location.href=link;
    }
}

// 포인트 내역 로그인 제한
function login_alert6() {
    if(access_token == undefined || refresh_token == undefined){
        Swal.fire({
            title: '회원 전용입니다.',
            text: "로그인하시겠습니까?",
            // icon: 'warning',
            customClass: 'swal-wide',
            showCancelButton: true,
            confirmButtonColor: '#4E7FF2',
            cancelButtonColor: '#DBDBDB',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                var link="login.html";
                location.href=link;
            }
        })
    }else{
        var link="point.html";
        location.href=link;
    }
}


// 회원가입 로그인 제한
function login_alert7() {
    if(access_token != undefined || refresh_token == undefined){
        Swal.fire({
            title: `회원가입은 \n 로그아웃한 상태에서 가능합니다.`,
            text: "로그아웃하시겠습니까?",
            // icon: 'warning',
            customClass: 'swal-wide',
            showCancelButton: true,
            confirmButtonColor: '#4E7FF2',
            cancelButtonColor: '#DBDBDB',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                change_logout();
                logout();
                var link="signUp.html";
                location.href=link;
            }
        });
    }else{
        var link="signUp.html";
        location.href=link;
    }
}

// 마이페이지 로그인 제한
function login_alert8() {
    if(access_token == undefined || refresh_token == undefined){
        Swal.fire({
            title: '회원 전용입니다.',
            text: "로그인하시겠습니까?",
            // icon: 'warning',
            customClass: 'swal-wide',
            showCancelButton: true,
            confirmButtonColor: '#4E7FF2',
            cancelButtonColor: '#DBDBDB',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                var link="login.html";
                location.href=link;
            }
        })
    }else{
        var link="myPage.html";
        location.href=link;
    }
}



