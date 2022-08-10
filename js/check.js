// userId 관리하는 파일

// 변수 선언
const $my_userId = '';
// login.js 에서 로그인 성공하면 실행하는 함수 -> login_success()

function login_success(){
    // 로그인 성공했는지 물어보고
    // 성공이면 로컬스토리지 저장, 메인으로 이동, 모든페이지 로그아웃으로 변경
    if(my_userId != ''){
        console.log("로그인 성공");
        moveToMain();
        change_logout();
    }
}


// 로그인 성공하면 로컬스토리지에 저장하고 메인으로 이동하고 모든 페이지 로그아웃으로 변경하는 함수

// 로그인 후 메인으로 이동
function moveToMain(){
    var link="../html/main.html";
    location.href=link;
}

// 로그인을 로그아웃으로 변경
function change_logout(){
    const link_login = document.querySelector(".link_login");
    
    link_login.textContent = "로그아웃";
    
}

// 로컬스토리지 저장
function local_save(){
    // localStorage에 저장할 객체
    const obj = $my_userId;

    // 객체, 배열을 JSON 문자열로 변환
    const objString = JSON.stringify(obj);

    // setItem
    localStorage.setItem('userId', objString);

    login_success();
}