var my_jwt = localStorage.getItem('x-access-token');

const postId = location.href.split('?')[1];
console.log(postId);

var newContent;

function gotoDetail() {
    var link=`../html/detailPage.html?${postId}`;
    location.href=link;
}

function modifyContent() {
    newContent = document.getElementById("inputExplain").value;
    fetchModifyForm();
}

function fetchModifyForm() {
    const modifyItem = {
        "userId" : 1,
        "content" : newContent
    }

    console.log(JSON.stringify(modifyItem));

    fetch(`http://seolmunzip.shop:9000/posts/${postId}` , {
        method: "PATCH",
        headers: {
            'x-access-token' : my_jwt,
            'Content-Type': 'application/json'            
        },
        body: JSON.stringify(modifyItem)
    })

    .then((response) => response.json())
    .then((response2) => {
        // if (response2.code == 2020) {
        //     alert(response2.message);
        //     gotoMain();
        // } else if (response2.code == 2022) {
        //     alert(response2.message);
        //     gotoMain();
        // } else if (response2.code == 3020) {
        //     alert(response2.message);
        //     gotoMain();
        // } else {
        //     gotoMysurvey();
        // }

        Swal.fire({
            title: '설문조사가 수정되었습니다.',
            customClass: 'swal-wide',
            confirmButtonColor: '#4E7FF2',
            cancelButtonColor: '#DBDBDB',
            confirmButtonText: '예'
        }).then((result) => {
            if (result.isConfirmed) {
                gotoDetail(); 
            }
        })
        
        console.log(response2.result);
    })
    .catch((error) => console.log("error", error))

}