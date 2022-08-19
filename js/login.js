// 변수 선언
var my_jwt = localStorage.getItem('x-access-token');

// 로그인 버튼 클릭시 실행 함수
function login_check() {
    var id = document.getElementById("id");
    var pwd1 = document.getElementById("pswd1");

    if(id.value == ""){ 
        $(".validId1").css("display","block");
        $(".validId1").css("color","#FC4B3D");
        $(".validId1").text("아이디를 입력하세요.");
        id.focus();
        return false; 
    };

    if(pwd1.value == ""){
        $(".validpwd2").css("display","block");
        $(".validpwd2").css("color","#FC4B3D");
        $(".validpwd2").text("비밀번호를 입력하세요.");
        pwd1.focus();
        return false;
    };

    // 로그인 정보 전송
    save();
}

// 아이디 찾기
function id_find(){
    //window.open("팝업될 문서 경로", "팝업될 문서 이름", "옵션");
    window.open("", "아이디 찾기", "width=600, height=200, left=200, top=100");
}

// 비밀번호 찾기
function pw_find(){
    //window.open("팝업될 문서 경로", "팝업될 문서 이름", "옵션");
    window.open("", "비밀번호 찾기", "width=600, height=200, left=200, top=100");
}

// post 데이터 보내기 함수
function save(){
    const data = {
        id: document.getElementById("id").value,
        pwd: document.getElementById("pswd1").value
    }
    fetch(`http://seolmunzip.shop:9000/auth/login`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    .then((response) => response.json())
    .then((response2) => {
        localStorage.removeItem('x-access-token');
        if(response2.code == '3014'){
            $(".one").css("display","block");
            $(".one").css("color","#FC4B3D");
            $(".one").text("아이디 또는 비밀번호를 잘못 입력했습니다.");
            $(".two").css("display","block");
            $(".two").css("color","#FC4B3D");
            $(".two").text("입력하신 내용을 다시 확인해주세요.");
        }else{
            localStorage.setItem('x-access-token', response2.result.jwt);
            $(".one").css("display","none");
            $(".two").css("display","none");
            login();
        }
        })
    .catch((error) => console.log("error", error))
}