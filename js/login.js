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

    // 로그인 정보 전송
    save();
}

function id_find(){
    //window.open("팝업될 문서 경로", "팝업될 문서 이름", "옵션");
    window.open("", "아이디 찾기", "width=600, height=200, left=200, top=100");
}

function pw_find(){
    //window.open("팝업될 문서 경로", "팝업될 문서 이름", "옵션");
    window.open("", "비밀번호 찾기", "width=600, height=200, left=200, top=100");
}

function save(){
    const data = {
        id: document.getElementById("id").value,
        pwd: document.getElementById("pswd1").value
    }
    fetch('http://umcsom.shop:9000/post/users', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    .then((response) => response.json())
    .then((data) => {console.log('Success');})
    .then(response => {alert("로그인이 완료되었습니다.");})
    // .then(response => {moveToMain();})
    .then(response => {change_logout();})
    .catch((error) => console.log("error", error))
}

// 로그인 후 메인으로 이동
function moveToMain(){
    var link="../html/main.html";
    location.href=link;

    // 로그인을 로그아웃으로 변경
    change_logout();
}

function change_logout(){
    const link_login = document.querySelector(".link_login");
    
    link_login.textContent = "로그아웃";
}