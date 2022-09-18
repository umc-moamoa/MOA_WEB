// 카카오 소셜로그인

function kakao_login(){
    const CLIENT_ID = "d005491d50fe50570e19e7b3a140e7cb";
    const REDIRECT_URI =  "http://localhost:5500/oauth";

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    var link=KAKAO_AUTH_URL;
    location.href=link;

    let code = new URL(window.location.href).searchParams.get('code');
    console.log(code);


}


// GET으로 인가코드 받는게 안된다..
// 구글링해보면 대부분 리액트로 해서 리액트로 해야할 것 같다.. 

/*
const CLIENT_ID = "d005491d50fe50570e19e7b3a140e7cb";
    const REDIRECT_URI =  "http://localhost:5500/oauth/callback/kakao";

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    var link=KAKAO_AUTH_URL;
    location.href=link;

    let code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
*/