// jwt 관리하는 파일

// 변수 선언
//const $my_jwt = '';
var my_jwt = localStorage.getItem('x-access-token');

// login.js 에서 로그인 시도하면 실행하는 함수 -> local_save()
// 로컬스토리지 저장

// 로그인 후 메인으로 이동
change_logout();
function login(){
    if(my_jwt != ''){
        var link="../html/main.html";
        location.href=link;
        change_logout();
    }
}

// 로그인을 로그아웃으로 변경
// 로그인 -> 로그인페이지로 이동 -> 로그인 성공 -> 로그아웃으로 모든 페이지 변경
// 로그아웃 -> 메인으로 이동 -> 로그인으로 변경 -> jwt 삭제
function change_logout(){
    const link_login = document.querySelector(".link_login");
    const $link_loginCheck = document.querySelector(".link_login").getAttribute( 'text' );
    if(my_jwt != '' || $link_loginCheck == "로그인"){ 
        link_login.textContent = "로그아웃";

    }else if(my_jwt == '' || $link_loginCheck=="로그아웃"){
        link_login.textContent = "로그인";
        localStorage.removeItem('x-access-token');
    }
}

