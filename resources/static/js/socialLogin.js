var my_jwt = localStorage.getItem('x-access-token');
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
        headers: {'x-access-token' : my_jwt,
                'refreshToken': my_refreshToken}
    })
    .then((response) => {
        kakao_login();
        console.log(response);
        localStorage.removeItem('my_jwt');
        localStorage.setItem('my_jwt', response.result.accessToken);
        certifiedCode = localStorage.getItem('my_jwt');
        console.log(my_jwt);

        localStorage.removeItem('my_refreshToken');
        localStorage.setItem('my_refreshToken', response.result.refreshToken);
        certifiedCode = localStorage.getItem('my_refreshToken');
        console.log(my_refreshToken);

        
        
    })
    .catch((error) => console.log("error", error))
}

function social_login(){

}

// 2. 카카오 초기화
Kakao.init('인증키');
console.log( Kakao.isInitialized() ); // 초기화 판단여부

 // 3. 데모버전으로 들어가서 카카오로그인 코드를 확인.
function loginWithKakao() {
    Kakao.Auth.login({
        success: function (authObj) {
            console.log(authObj); // access토큰 값
            Kakao.Auth.setAccessToken(authObj.access_token); // access토큰값 저장

            getInfo();
        },
        fail: function (err) {
            console.log(err);
        }
    });
}

 // 4. 엑세스 토큰을 발급받고, 아래 함수를 호출시켜서 사용자 정보를 받아옴.
function getInfo() {
    Kakao.API.request({
        url: '/v2/user/me',
        success: function (res) {
            console.log(res);
             // 이메일, 성별, 닉네임, 프로필이미지
            var email = res.kakao_account.email;
            var gender = res.kakao_account.gender;
            var nickname = res.kakao_account.profile.nickname;
            var profile_image = res.kakao_account.profile.thumbnail_image_url;

            console.log(email, gender, nickname, profile_image);
        },
        fail: function (error) {
            alert('카카오 로그인에 실패했습니다. 관리자에게 문의하세요.' + JSON.stringify(error));
        }
    });
}

 // 5. 로그아웃 기능 - 카카오 서버에 접속하는 엑세스 토큰을 만료, 사용자 어플리케이션의 로그아웃은 따로 진행.
function kakaoLogout() {
    if (!Kakao.Auth.getAccessToken()) {
        alert('Not logged in.');
        return;
    }
    Kakao.Auth.logout(function() {
        alert('logout ok\naccess token -> ' + Kakao.Auth.getAccessToken());
    });
}


