function login_check() {
    var id = document.getElementById("id");
    var pwd1 = document.getElementById("pswd1");

    if(id.value == ""){ 
        alert("아이디를 입력하세요.");
        id.focus(); // 커서가 깜빡이는 현상
        return false; // 아무것도 반환하지 마라, 아래 코드부터 진행 X
    };

    if(pwd1.value == ""){
        alert("비밀번호를 입력하세요.");
        pwd1.focus();
        return false;
    };

    //입력 값 전송
    document.loginForm.submit(); //유효성 검사의 포인트
}