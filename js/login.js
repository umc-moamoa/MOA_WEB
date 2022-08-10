
// 변수 선언
//const $my_userId = '';

// 로그인 버튼 클릭시 실행 함수
function login_check() {
    var id = document.getElementById("id");
    var pwd1 = document.getElementById("pswd1");

    var validId1 = document.getElementsByClassName("validId1");
    var validpwd2 = document.getElementsByClassName("validpwd2");
    var valid = document.getElementsByClassName("valid");
    var one = document.getElementsByClassName("one");
    var two = document.getElementsByClassName("two");

    if(id.value == ""){ 
        $(".validId1").css("display","block");
        $(".validId1").css("color","#FC4B3D");
        $(".validId1").text("아이디를 입력하세요.");
        id.focus(); // 커서가 깜빡이는 현상
        return false; // 아무것도 반환하지 마라, 아래 코드부터 진행 X
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
    fetch(`http://umcsom.shop:9000/auth/login`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    .then((response) => response.json())
    .then((response) => console.log(response))
    //.then((response) => {$my_userId = response.result.userId;})
    .then((response) => {local_save();})
    .then((response)=> {
        //$my_userId = response.result.userId;
        if($my_userId == ''){
            $(".valid").css("display","block");
            $(".valid").css("color","#FC4B3D");
            $(".one").text("아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.");
            $(".two").text("입력하신 내용을 다시 확인해주세요.");
        }
    })
    //.then(response => {alert("로그인이 완료되었습니다.");})
    
    //.then(response => {login_success();})
    .catch((error) => console.log("error", error))
}

/* test test123
qwert 123 */
