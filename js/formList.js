const $SurveyList1 = document.querySelector("#SurveyList1");
const $SurveyList2 = document.querySelector("#SurveyList2");
const $SurveyList3 = document.querySelector("#SurveyList3");
const $SurveyList4 = document.querySelector("#SurveyList4");

function selectedValue() {
    var select = document.getElementById('Stype');
    var value = select.options[select.selectedIndex].value; 

    return value;
}

var category;
const fetchSurvey = () => {
    var requestOptions = {
        method: "GET",
    };

    category = selectedValue();

    fetch(
        `http://seolmunzip.shop:9000/posts?categoryId=${category}`,
        requestOptions
    )
    .then((response) => response.json())
    .then((webResult) => {
        webResult.result.map(item => SurveyListTemplate(item));
        slick(category);
    })
    .catch((error) => console.log("error", error))
}

fetchSurvey();

function SurveyListTemplate (data) {

    const SurveyItem1 = `<div id="main1">
                            <div class="one-container1">
                                <a id="title1" href="../html/detailPage.html" data-id=${data.postId}>  ${data.title}  </a>
                            </div>
                            <div class="two-container1">
                                <span id="count1">${data.qcount}개 항목&nbsp;&nbsp;</span>
                                <span id="type1">ㅣ&nbsp;&nbsp;D-${data.dday}</span>
                            </div>
                            <div class="three-container1">
                                <span id="point1">  ${data.point}P  </span>
                            </div>
                        </div>
    `;
    const SurveyItem2 = `<div id="main1">
                            <div class="one-container1">
                                <a id="title1" href="../html/detailPage.html" data-id=${data.postId}>  ${data.title}  </a>
                            </div>
                            <div class="two-container1">
                                <span id="count1">${data.qcount}개 항목&nbsp;&nbsp;</span>
                                <span id="type1">ㅣ&nbsp;&nbsp;CLOSED</span>
                            </div>
                            <div class="three-container1">
                                <span id="point1">  ${data.point}P  </span>
                            </div>
                        </div>
    `;
    
    if ( data.status == 'CLOSED' ) {
        if ( category == 1 ) {
            $SurveyList1.insertAdjacentHTML('beforeend', SurveyItem2);
        } else if ( category == 2 ) {
            $SurveyList2.insertAdjacentHTML('beforeend', SurveyItem2);
        } else if ( category == 3 ) {
            $SurveyList3.insertAdjacentHTML('beforeend', SurveyItem2);
        } else if ( category == 4 ) {
            $SurveyList4.insertAdjacentHTML('beforeend', SurveyItem2);
        }
    } else {
        if ( category == 1 ) {
            $SurveyList1.insertAdjacentHTML('beforeend', SurveyItem1);
        } else if ( category == 2 ) {
            $SurveyList2.insertAdjacentHTML('beforeend', SurveyItem1);
        } else if ( category == 3 ) {
            $SurveyList3.insertAdjacentHTML('beforeend', SurveyItem1);
        } else if ( category == 4 ) {
            $SurveyList4.insertAdjacentHTML('beforeend', SurveyItem1);
        }
    }
}

function slick(){
    // $(document).ready(function(){
        if ( category == 1 ) {
            $('#SurveyList1').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                rows:3,
                infinite:false,
                prevArrow : $('.prev'), 
                nextArrow : $('.next'), 
            });
        }
        else if ( category == 2 ) {
            $('#SurveyList2').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                rows:3,
                infinite:false,
                prevArrow : $('.prev'), 
                nextArrow : $('.next'), 
            });
        }
        else if ( category == 3 ) {
            $('#SurveyList3').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                rows:3,
                infinite:false,
                prevArrow : $('.prev'), 
                nextArrow : $('.next'), 
            });
        }
        else if ( category == 4 ) {
            $('#SurveyList4').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                rows:3,
                infinite:false,
                prevArrow : $('.prev'), 
                nextArrow : $('.next'), 
            });
        }
    // });
}

 // 1->2->1 눌렀을 때 폼 목록 하나 더 생기는 거 해결하기 -> slick에 문제가 있는 것 같기도..?
// onchange 될 때 추가하는 게 아니라, 처음 페이지 로딩되면 다 추가해놓고, onchange 되는 거에 따라 보여주기만 해야될듯.
// 4파트를 만들어놓고, selectedValue에 따라서 visible 그거 ?.. 흠
// 시도하다가 몇시간 날렸음

// 뭐하지.?? -> 음, 최초 호출 count 제한을 둬볼까.. 2,3,4일 때 또 호출되는 게 문제인 거임. 그럼 똑같은 데이터로 또 생겨버리니까,,

var count2 = 0;
var count3 = 0;
var count4 = 0;
function showSurvey() {
    category = selectedValue();
    if ( category == 1 ) {
        $('#SurveyList1').show();
        $('#SurveyList2').hide();
        $('#SurveyList3').hide();
        $('#SurveyList4').hide();
    }
    else if ( category == 2 ) {
        count2++;
        if(count2 == 1) {
            fetchSurvey(); //최초 1회만 데이터 추가됨. 1->2->1->2 중복 추가 방지
        }
        $('#SurveyList1').hide();
        $('#SurveyList2').show();
        $('#SurveyList3').hide();
        $('#SurveyList4').hide();
    }
    else if ( category == 3 ) {
        count3++;
        if(count3 == 1) {
            fetchSurvey(); //최초 1회만 데이터 추가됨. 1->2->1->2 중복 추가 방지
        }
        $('#SurveyList1').hide();
        $('#SurveyList2').hide();
        $('#SurveyList3').show();
        $('#SurveyList4').hide();
    }
    else if ( category == 4 ) {
        count4++;
        if(count4 == 1) {
            fetchSurvey(); //최초 1회만 데이터 추가됨. 1->2->1->2 중복 추가 방지
        }
        $('#SurveyList1').hide();
        $('#SurveyList2').hide();
        $('#SurveyList3').hide();
        $('#SurveyList4').show();
    }
}