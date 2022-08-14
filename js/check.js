// jwt 관리하는 파일

// 변수 선언
var check = 0;
var my_jwt = localStorage.getItem('x-access-token');
const link_login = document.querySelector(".link_login");

// 로그인 후 메인으로 이동
change_logout();
function login(){
    var link="../html/main.html";
    location.href=link;
    link_login.textContent = "로그아웃";
    //change_logout();
}

// 로그인을 로그아웃으로 변경
// 로그인 -> 로그인페이지로 이동 -> 로그인 성공 -> 로그아웃으로 모든 페이지 변경
// 로그아웃 -> 메인으로 이동 -> 로그인으로 변경 -> jwt 삭제
function change_logout(){
    if(my_jwt != null){  // 로그인 된 상태
        link_login.textContent = "로그아웃";
        onclick(logout());
        // var link="../html/login.html";
        // onclick(location.href=link);

    }else{ // 로그아웃 상태 -> 기본 상태
        link_login.textContent = "로그인";
        // var link="../html/login.html";
        // location.href=link;
        
    }
}
function logout(){
    localStorage.removeItem('x-access-token');
}

// 되는 듯? 안되는 듯? 애매한 상태 -> 모든 페이지 연결 필요