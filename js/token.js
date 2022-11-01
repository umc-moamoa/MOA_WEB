var my_jwt = localStorage.getItem('x-access-token');
var my_refresh = localStorage.getItem('x-refresh-token');

const fetchTokenCheck = () => {
    var requestOptions = {
        method: "Get",
        headers: {'x-refresh-token' : my_refresh,}
    };

    fetch(
        "http://seolmunzip.shop:9000/auth/refresh",
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) => {
            console.log(webResult.message);
            // 리프레쉬 토큰 마저 만료되었을 때 
            if(webResult.code == 5001) {
                
            }
            localStorage.removeItem('x-access-token');
            localStorage.setItem('x-access-token', webResult.result);

        })
        .catch((error) => console.log("error", error));
}

fetchTokenCheck();