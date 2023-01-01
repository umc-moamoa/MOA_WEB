var my_access = localStorage.getItem('accessToken');
var my_refreshToken = localStorage.getItem('refreshToken');

// 카카오 소셜로그인
function kakao_login(){
    const CLIENT_ID = "33e6522327646afb407301014936ebe9";
    //const REDIRECT_URI =  "http://127.0.0.1:5500/resources/templates/main.html";
    const REDIRECT_URI = "http://localhost:9000/auth/kakaoLogin";

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    var link=KAKAO_AUTH_URL;
    location.href=link;

    let code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
    
}


function social_login(){
    fetch(`http://seolmunzip.shop:9000/auth/kakaoLogin`, {
        method: "POST",
        headers: {'x-access-token' : my_access,
                'refreshToken': my_refreshToken}
    })
    .then((response) => {
        console.log(response);
        kakao_login_OK();
    })
    .catch((error) => console.log("error", error))
}

function kakao_login_OK(){
    
    if(my_access != null){  // 로그인 된 상태
        $(".link_login").css("display","none");
        $(".link_kako_logout").css("display","block");
    }else{ // 로그아웃 상태
        $(".link_login").css("display","block");
        $(".link_kako_logout").css("display","none");
    }
    
    function logout(){
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
    }
}
