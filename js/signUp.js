// 유효성 체크
function join_check(){
    var id = document.getElementById("id");
    var pwd1 = document.getElementById("pswd1");
    var pwd2 = document.getElementById("pswd2");
    var nickName = document.getElementById("nickName");

    var validId1 = document.getElementsByClassName("validId1");
    var validId2 = document.getElementsByClassName("validId2");
    var validId3 = document.getElementsByClassName("validId3");
    var validId4 = document.getElementsByClassName("validId4");
    // 해당 입력값이 없을 경우
    if(id.value == ""){
        $(".validId1").css("display","block");
        $(".validId1").css("color","#FC4B3D");
        $(".validId1").text("아이디를 입력하세요.");
        id.focus(); // 커서가 깜빡이는 현상
        return false; // 아무것도 반환하지 마라, 아래 코드부터 진행 X
    }else{
        $(".validId1").css("display","none");
    };
    
    if (nickName.value == "") {
        $(".validId2").css("display","block");
        $(".validId2").css("color","#FC4B3D");
        $(".validId2").text("닉네임을 입력하세요.");
        nickName.focus();
        return false;
    }else{
        $(".validId2").css("display","none");
    };

    if(pwd1.value == ""){
        $(".validId3").css("display","block");
        $(".validId3").css("color","#FC4B3D");
        $(".validId3").text("비밀번호를 입력하세요.");
        pwd1.focus();
        return false;
    }else{
        $(".validId3").css("display","none");
    };

    //비밀번호 영문자+숫자+특수조합(7~15자리 입력) 정규식
    //var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).7,15}$/;
    //var pwdCheck = /^(?=.*[a-zA-Z]).{2,20}$/;

    // if (!pwdCheck.test(pwd1.value)) {
    //     $(".validId3").css("display","block");
    //     $(".validId3").css("color","#FC4B3D");
    //     $(".validId3").text("비밀번호는 영문자+숫자+특수문자 조합으로 7~15자리 사용해야 합니다.");
    //     pwd1.focus();
    //     return false;
    // }else{
    //     $(".validId3").css("display","none");
    // };

    if (pwd1.value !== pwd2.value) {
        $(".validId4").css("display","block");
        $(".validId4").css("color","#FC4B3D");
        $(".validId4").text("비밀번호가 일치하지 않습니다.");
        pwd2.focus();
        return false;
    }else{
        $(".validId4").css("display","none");
    };

    if(check_id == 0){
        alert("아이디 중복체크해주세요.");
        id.focus();
    }else if(check_name == 0){
        alert("닉네임 중복체크해주세요.");
    }else{
    save(); 
    }

    
}
var check_id = 0;
//아이디 중복체크
function id_check() {

    // 아이디 보내기
    const data = {
        id: document.getElementById("id").value
    }
    fetch(`uhttp://seolmunzip.shop:9000/`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    .then((response) => response.json())
    .catch((error) => console.log("error", error))

    // 중복 체크 결과 받아오기
    const id_check_detail = () => {

        fetch(`http://seolmunzip.shop:9000/`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((checkResult) => {/* 중복체크 변수 받아오기 */})
            .catch((error) => console.log("error", error));
    }
    id_check_detail();

    var check = true; // api 연결 되면 check 변수 지우기
    if(id.value == ""){
        $(".validId1").css("display","block");
        $(".validId1").css("color","#FC4B3D");
        $(".validId1").text("아이디를 입력하세요.");
        id.focus();
    }else if(check=true){ // 중복 조건 수정
        $(".validId1").css("display","block");
        $(".validId1").css("color","#4383FF");
        $(".validId1").text("사용 가능한 아이디입니다.");
        check_id = 1;
        
    }else if(check=false){ // 중복 조건 수정
        $(".validId1").css("display","block");
        $(".validId1").css("color","#FC4B3D");
        $(".validId1").text("이미 사용 중인 아이디입니다.");
        check_id = 0;
    }
    else{
        $(".validId1").css("display","none");
    };

}

var check_name = 0;
//닉네임 중복체크
function name_check() {

    /* 닉네임 보내고 결과 반환하는 내용 추가하기 */

    var check = true; // api 연결 되면 check 변수 지우기
    if(id.value == ""){
        $(".validId2").css("display","block");
        $(".validId2").css("color","#FC4B3D");
        $(".validId2").text("닉네임을 입력하세요.");
        id.focus();
    }else if(check=true){ // 중복 조건 수정
        $(".validId2").css("display","block");
        $(".validId2").css("color","#4383FF");
        $(".validId2").text("사용 가능한 닉네임입니다.");
        check_name = 1;
        
    }else if(check=false){ // 중복 조건 수정
        $(".validId2").css("display","block");
        $(".validId2").css("color","#FC4B3D");
        $(".validId2").text("이미 사용 중인 닉네임입니다.");
        check_name = 0;
    }
    else{
        $(".validId2").css("display","none");
    };

}

function save(){
    const data = {
        id: document.getElementById("id").value,
        pwd: document.getElementById("pswd1").value,
        nick: document.getElementById("nickName").value
    }
    fetch(`http://seolmunzip.shop:9000/users`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    .then((response) => response.json())
    .then(response => {moveToLogin();})
    .catch((error) => console.log("error", error))
}

// 회원가입 후 메인으로 이동
function moveToLogin(){
    alert("회원가입이 완료되었습니다.");
    var link="../html/login.html";
    location.href=link;
}