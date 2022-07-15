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
    .then(res => {
        if (res) {
            alert("회원가입이 완료되었습니다.");
        }
    })
    .catch((error) => console.log("error", error));

}

/*
function save() {
    alert('user의 save함수 호출됨');
    let data = { 
        id: $("#id").val(),
        pwd: $("#pswd1").val(),
        nick: $("#nickName").val(),
        name: $("#name").val()
    };
    console.log(data);

    // ajax 호출시 default가 비동기 호출 -> 순서 상관없음
    // ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청
    // ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환
    $.ajax({
        // 회원가입 수행 요청
        type: "POST",
        url: "http://umcsom.shop:9000/users",
        data: JSON.stringify(data), // http body 데이터
        contentType: "application/json; charset=utf-8", // body 데이터가 어떤 타입인지 (MIME)
        dataType: "json" // 요청을 서버로 해서 응답이 왔을 때 기본적으로 모든 것이 String(문자열), 만약 생긴게 json이라면 javascript 오브젝트로 변경
    }).done(function (resp) {
        // 결과가 정상이면 done 실행
        alert("회원가입이 완료되었습니다.");
        //console.log(resp);
        location.href = "main.html";
    }).fail(function (error) {
        // 실패하면 fail 실행
        alert("회원가입이 실패하였습니다.");
        alert(JSON.stringify(error));
    });
}*/
