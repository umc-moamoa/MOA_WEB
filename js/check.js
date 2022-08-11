// jwt 관리하는 파일

// 변수 선언
const $my_jwt = '';

// login.js 에서 로그인 시도하면 실행하는 함수 -> local_save()
// 로컬스토리지 저장
function local_save(){
    // localStorage에 저장할 객체
    const obj = $my_jwt;

    // 객체, 배열을 JSON 문자열로 변환
    const objString = JSON.stringify(obj);

    // setItem
    localStorage.setItem('jwt', objString);

    // 로그인 정보 없으면
    if($my_jwt == ''){
        $(".valid").css("display","block");
        $(".valid").css("color","#FC4B3D");
        $(".one").text("아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.");
        $(".two").text("입력하신 내용을 다시 확인해주세요.");
    }else{ // 로그인 성공하면 메인으로 이동, 모든페이지 로그아웃으로 변경
        console.log("로그인 성공");
        //moveToMain();
        change_logout();
    }
}

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

