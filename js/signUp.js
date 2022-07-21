// 유효성 체크
function join_check(){
    var id = document.getElementById("id");
    var pwd1 = document.getElementById("pswd1");
    var pwd2 = document.getElementById("pswd2");
    var nickName = document.getElementById("nickName");

    var overlapTxt = document.getElementsByClassName("overlapTxt");
    var pwAlertTxt = document.getElementsByClassName("pwAlertTxt");
    var pwCheckAlertTxt = document.getElementsByClassName("pwCheckAlertTxt");
    var nickAlertTxt = document.getElementsByClassName("nickAlertTxt");

    // 해당 입력값이 없을 경우
    if(id.value == ""){
        $(".overlapTxt").css("display","block");
        $(".overlapTxt").css("color","#FC4B3D");
        $(".overlapTxt").text("아이디를 입력하세요.");
        id.focus(); // 커서가 깜빡이는 현상
        return false; // 아무것도 반환하지 마라, 아래 코드부터 진행 X
    }else{
        $(".overlapTxt").css("display","none");
    };

    if(pwd1.value == ""){
        $(".pwAlertTxt").css("display","block");
        $(".pwAlertTxt").css("color","#FC4B3D");
        $(".pwAlertTxt").text("비밀번호를 입력하세요.");
        pwd1.focus();
        return false;
    }else{
        $(".pwAlertTxt").css("display","none");
    };

    //비밀번호 영문자+숫자+특수조합(8~20자리 입력) 정규식
    // var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    var pwdCheck = /^(?=.*[a-zA-Z]).{2,20}$/;

    if (!pwdCheck.test(pwd1.value)) {
        $(".pwAlertTxt").css("display","block");
        $(".pwAlertTxt").css("color","#FC4B3D");
        $(".pwAlertTxt").text("비밀번호는 영문자+숫자+특수문자 조합으로 8~20자리 사용해야 합니다.");
        pwd1.focus();
        return false;
    }else{
        $(".pwAlertTxt").css("display","none");
    };

    if (pwd1.value !== pwd2.value) {
        $(".pwCheckAlertTxt").css("display","block");
        $(".pwCheckAlertTxt").css("color","#FC4B3D");
        $(".pwCheckAlertTxt").text("비밀번호가 일치하지 않습니다.");
        pwd2.focus();
        return false;
    }else{
        $(".pwCheckAlertTxt").css("display","none");
    };

    if (nickName.value == "") {
        $(".nickAlertTxt").css("display","block");
        $(".nickAlertTxt").css("color","#FC4B3D");
        $(".nickAlertTxt").text("닉네임을 입력하세요.");
        nickName.focus();
        return false;
    }else{
        $(".nickAlertTxt").css("display","none");
    };

    //입력 값 전송
    save(); 
}

//아이디 중복체크 팝업창
function id_check() {
    var check = true;
    if(id.value == ""){
        $(".overlapTxt").css("display","block");
        $(".overlapTxt").css("color","#FC4B3D");
        $(".overlapTxt").text("아이디를 입력하세요.");
        id.focus();
    }else if(check=true){ // 중복 조건 수정
        $(".overlapTxt").css("display","block");
        $(".overlapTxt").css("color","#4383FF");
        $(".overlapTxt").text("사용 가능한 아이디입니다.");
    }else if(check=false){ // 중복 조건 수정
        $(".overlapTxt").css("display","block");
        $(".overlapTxt").css("color","#FC4B3D");
        $(".overlapTxt").text("이미 사용 중인 아이디입니다.");
    }
    else{
        $(".overlapTxt").css("display","none");
    };

}

function save(){
    const data = {
        id: document.getElementById("id").value,
        pwd: document.getElementById("pswd1").value,
        nick: document.getElementById("nickName").value,
        name: document.getElementById("name").value
    }
    fetch('http://umcsom.shop:9000/post/users', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    .then((response) => response.json())
    .then((data) => {console.log('Success');})
    .then(response => {alert("회원가입이 완료되었습니다.");})
    // .then(response => {moveToMain();})
    .catch((error) => console.log("error", error))
}

// 회원가입 후 메인으로 이동
function moveToMain(){
    var link="../html/main.html";
    location.href=link;
}
