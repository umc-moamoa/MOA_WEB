function join_check(){
    var id = document.getElementById("id");
    var pwd1 = document.getElementById("pswd1");
    var pwd2 = document.getElementById("pswd2");
    var name = document.getElementById("name");
    var nickName = document.getElementById("nickName");
    
    // 해당 입력값이 없을 경우
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

    //비밀번호 영문자+숫자+특수조합(8~20자리 입력) 정규식
    var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

    if (!pwdCheck.test(pwd1.value)) {
        alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~20자리 사용해야 합니다.");
        pwd1.focus();
        return false;
    };

    if (pwd1.value !== pwd2.value) {
        alert("비밀번호가 일치하지 않습니다..");
        pwd2.focus();
        return false;
    };

    if (name.value == "") {
        alert("이름을 입력하세요.");
        name.focus();
        return false;
    };

    if (nickName.value == "") {
        alert("닉네임을 입력하세요.");
        nickName.focus();
        return false;
    };


    //입력 값 전송
    document.join_form.submit(); //유효성 검사의 포인트   
}
    //아이디 중복체크 팝업창(현재 공백문서)
    function id_check() {
    //window.open("팝업될 문서 경로", "팝업될 문서 이름", "옵션");
    window.open("", "", "width=600, height=200, left=200, top=100");
    }


