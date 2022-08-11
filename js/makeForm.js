function addQuestion() {

    function selectedValue() {

        var select = type;
        var value = select.options[type.selectedIndex].value; 
        //this, 뭐 등등 필요없이 해당 함수 실행되는 블록에서의 div1, select 등 찾을 수 있음!

        return value;
    }

    function changeQtype() {

        var thisQs = div1.children;
        for (var i=1; i<thisQs.length-1; i++) {
            var thisQinput2 = thisQs[i].firstChild;
            var thisQvalue = selectedValue();
            if (thisQvalue == 1) {
                thisQinput2.type = 'radio';

                // 단답형으로 갔다가 돌아오면?
                thisQs[1].children[0].style.visibility = 'visible';
                thisQs[1].children[2].style.display = '';

                thisQs[1].children[1].value = ''; // 객관식에서 옵션 1에 입력하고 단답형으로 바꿨을 때 입력한 input 값이 넘어가지 않도록. (반대로도 마찬가지)
                thisQs[1].children[1].placeholder = '옵션 1';
                thisQs[1].children[1].setAttribute('onblur', 'this.placeholder="옵션 1"');

                thisQs[2].style.display = '';
                thisQs[3].style.display = '';
            }
            else if (thisQvalue == 2) {
                thisQinput2.type = 'checkbox'; 

                // 단답형으로 갔다가 돌아오면?
                thisQs[1].children[0].style.visibility = 'visible';
                thisQs[1].children[2].style.display = '';

                thisQs[1].children[1].value = ''; // 객관식에서 옵션 1에 입력하고 단답형으로 바꿨을 때 입력한 input 값이 넘어가지 않도록. (반대로도 마찬가지)
                thisQs[1].children[1].placeholder = '옵션 1';
                thisQs[1].children[1].setAttribute('onblur', 'this.placeholder="옵션 1"');

                thisQs[2].style.display = '';
                thisQs[3].style.display = '';

            }
            //여기에 단답형, 장문형 타입도 정의하면 된다. 이건 또 생각해볼 문제,, 단순 타입 변경이 아니라 전체 div를 바꿔야함.
            // 그냥 바꾸는 게 문제가 아니라 다시 버튼으로 돌아올 수 있어야 함 -> 원래 꺼 아예 지우면 안 됨 or 다시 돌아올 때 다시 생성
            else if (thisQvalue == 3) {
                // thisQs[2].style.visibility = 'hidden';
                // thisQs[3].style.visibility = 'hidden';
                thisQs[1].children[0].style.visibility = 'hidden';
                thisQs[1].children[2].style.display = 'none';

                thisQs[1].children[1].value = ''; // 객관식에서 옵션 1에 입력하고 단답형으로 바꿨을 때 입력한 input 값이 넘어가지 않도록.
                thisQs[1].children[1].placeholder = '단답형';
                thisQs[1].children[1].setAttribute('onblur', 'this.placeholder="단답형"');
                // thisQs[1].children[1].onblur = "this.placeholder='단답형'";

                thisQs[2].style.display = 'none';
                thisQs[3].style.display = 'none';
            }
            else if (thisQvalue == 4) {
                
                thisQs[1].children[0].style.visibility = 'hidden';
                // thisQs[1].children[1].style.display = 'none';
                thisQs[1].children[2].style.display = 'none';

                thisQs[2].style.display = 'none';
                thisQs[3].style.display = 'none';
                //js에서 css를 변경할 때 style 사용함.
                // thisQs[1].children[1].style.maxlength = '1000';
                // thisQs[1].children[1].style.width = '88%';

                thisQs[1].children[1].value = ''; 
                thisQs[1].children[1].placeholder = '장문형';
                thisQs[1].children[1].setAttribute('onblur', 'this.placeholder="장문형"');

                // thisQs[1].style.display = 'none';



                // var longtext = document.createElement("textarea");
                // longtext.setAttribute('placeholder', '장문형');
                // longtext.setAttribute('onblur', 'this.placeholder="장문형"');
                
            }
        }

    }

    function addOption() {
        //옵션 추가란 누르자마자 placeholder 글 지워지고, 새 옵션 추가란 생기도록
        this.placeholder='';
    
        var div3 = document.createElement("div");
        div3.className = 'makeOption';
    
        var input2 = document.createElement("input");
        var value2 = selectedValue();
        if (value2 == 1) {
            input2.type = 'radio';
        } else if (value2 ==2 ) { // **** 아직도 1번 문항의 selectedValue에 종속되어 있음 -> selectedValue 고쳐서 해결함!
            input2.type = 'checkbox';
        }

        input2.className = 'btns'
        input2.name = 'checkOption' + optionNum;
        // input2.value = '4'; 
    
        var input3 = document.createElement("input");
        input3.type = 'text';
        input3.className = 'optionInput';
        input3.setAttribute('maxlength', '40');
        input3.setAttribute('placeholder', "옵션 추가 또는 '기타' 추가");
        input3.setAttribute('onfocus', 'this.placeholder=""');
    
        input3.onfocus = addOption;
        input3.setAttribute('onblur', 'this.placeholder="옵션 추가 또는 \'기타\' 추가"');
    
        var xbtn = document.createElement("button");
        xbtn.id = 'xButton';
        xbtn.type = 'button';
        xbtn.onclick = function() {
            //xbtn 누르면 xbtn의 부모 div remove.
            var parent = this.parentNode;
            parent.remove();            
        
        };
        var ximage = document.createElement("img");
        ximage.setAttribute('src', '../image/Group 16.png');
        ximage.setAttribute('width', '50%');
    
        div3.appendChild(input2);
        div3.appendChild(input3);
        // div1.appendChild(div3);
        div1.insertBefore(div3, div4);
        xbtn.appendChild(ximage);
        div3.appendChild(xbtn);
    }

    //surveyElement
    var div1 = document.createElement("div");
    div1.className = 'surveyElement';

    //question
    var div2 = document.createElement("div")
    div2.className = 'question';

    var num = document.createElement("span");
    num.className = 'Qnum';

    var rank = 1;
    var surveyElements = document.getElementById("surveyElements");
    if( surveyElements.children.length == 0) { //젤 처음 & 도중에 다 지우고 추가할 때 빈 번호칸 방지
        num.textContent = "1.";
    } else
        for (var i=0; i<surveyElements.children.length; i++) { //하나라도 남아있으면 번호 재정렬
            var surveyElement = surveyElements.children[i];
            var question = surveyElement.firstChild;
            var Qnum = question.firstChild;
            num.textContent = ++rank + ".";
        }

    var optionNum = num.innerText; //질문 번호 -> 라디오 버튼 그룹 만들기 (innerText)

    var input1 = document.createElement("input");
    input1.className = 'Qinput';
    input1.setAttribute('maxlength', '40');
    input1.setAttribute('placeholder', '질문을 입력해주세요.');
    input1.setAttribute('onfocus', 'this.placeholder=""');
    input1.setAttribute('onblur', 'this.placeholder="질문을 입력해주세요."');

    var type = document.createElement("select");
    type.className = 'Qtype';
    type.id = 'Qtype'; //id 추가
    type.onchange = changeQtype; //이벤트 함수 추가/
/*     type.onchange = function () { 
        var thisQs = div1.children;
        for (var i=1; i<thisQs.length-1; i++) {
            var thisQinput2 = thisQs[i].firstChild;
            var thisQvalue = selectedValue();
            if (thisQvalue == 1) 
                thisQinput2.type = 'radio';
            else if (thisQvalue == 2)
                thisQinput2.type = 'checkbox'; 
        }
    } */
    // 이대로 하니까 1번에 종속되지는 않는데, 1번만 변경됨..  -> 별도 함수 다시 
    // -> 문제는 이게 아니라 전체에서 찾아서 그런 거였음. 해당 블록 안에서 알아서 찾아줌 !

    var typeOption1 = document.createElement("option");
    typeOption1.value = 1;
    var optionText1 = document.createTextNode('객관식 질문');
    typeOption1.defaultSelected; //디폴트 선택
    var typeOption2 = document.createElement("option");
    typeOption2.value = 2;
    var optionText2 = document.createTextNode('체크박스');
    var typeOption3 = document.createElement("option");
    typeOption3.value = 3;
    var optionText3 = document.createTextNode('단답형');
    var typeOption4 = document.createElement("option");
    typeOption4.value = 4;
    var optionText4 = document.createTextNode('장문형');
    
    surveyElements.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(num);
    //num.appendChild(numText);
    div2.appendChild(input1);

    typeOption1.appendChild(optionText1);
    type.appendChild(typeOption1);
    typeOption2.appendChild(optionText2);
    type.appendChild(typeOption2);
    typeOption3.appendChild(optionText3);
    type.appendChild(typeOption3);
    typeOption4.appendChild(optionText4);
    type.appendChild(typeOption4);
    div2.appendChild(type);

    // //textarea
    // var longtext = document.createElement("textarea");
    // longtext.className = 'longT';
    // longtext.setAttribute('placeholder', '장문형');
    // longtext.setAttribute('onblur', 'this.placeholder="장문형"');
    // div1.appendChild(longtext);
    // longtext.style.display = 'none';
    

    // if (value1 == 1) { //이거 안 써도 plus로 추가될 때는 radio 버튼으로 생긴다. 아래 코드 때문에 ! -> 결국 다 한 블럭.
    //makeOption
    var div3 = document.createElement("div");
    div3.className = 'makeOption';

    var input2 = document.createElement("input");
    input2.type = 'radio'; //새로 추가되는 질문은 다 radio 버튼으로 생긴다. 
    input2.className = 'btns'
    input2.name = 'checkOption' + optionNum;
    // input2.value = '1';

    var input3 = document.createElement("input");
    input3.type = 'text';
    input3.className = 'optionInput';
    input3.setAttribute('maxlength', '40');
    input3.setAttribute('placeholder', '옵션 1');
    input3.setAttribute('onfocus', 'this.placeholder=""');
    input3.setAttribute('onblur', 'this.placeholder="옵션 1"');

    var xbtn = document.createElement("button");
    xbtn.id = 'xButton';
    xbtn.type = 'button';
    xbtn.onclick = function() {
        //xbtn 누르면 xbtn의 부모 div remove.
        var parent = this.parentNode;
        parent.remove();            
        
    };
    var ximage = document.createElement("img");
    ximage.setAttribute('src', '../image/Group 16.png');
    ximage.setAttribute('width', '50%');

    div3.appendChild(input2);
    div3.appendChild(input3);
    div1.appendChild(div3);
    xbtn.appendChild(ximage);
    div3.appendChild(xbtn);

    //makeOption
    var div3 = document.createElement("div");
    div3.className = 'makeOption';

    var input2 = document.createElement("input");
    input2.type = 'radio';
    input2.className = 'btns'
    input2.name = 'checkOption' + optionNum; //name으로 구별을 한다..
    // input2.value = '2';

    var input3 = document.createElement("input");
    input3.type = 'text';
    input3.className = 'optionInput';
    input3.setAttribute('maxlength', '40');
    input3.setAttribute('placeholder', '옵션 2');
    input3.setAttribute('onfocus', 'this.placeholder=""');
    input3.setAttribute('onblur', 'this.placeholder="옵션 2"');

    var xbtn = document.createElement("button");
    xbtn.id = 'xButton';
    xbtn.type = 'button';
    xbtn.onclick = function() {
        //xbtn 누르면 xbtn의 부모 div remove.
        var parent = this.parentNode;
        parent.remove();            
        
    };
    var ximage = document.createElement("img");
    ximage.setAttribute('src', '../image/Group 16.png');
    ximage.setAttribute('width', '50%');

    div3.appendChild(input2);
    div3.appendChild(input3);
    div1.appendChild(div3);
    xbtn.appendChild(ximage);
    div3.appendChild(xbtn);


    //addOption
    var div3 = document.createElement("div");
    div3.className = 'makeOption';

    var input2 = document.createElement("input");
    input2.type = 'radio';
    input2.className = 'btns'
    input2.name = 'checkOption' + optionNum;
    // input2.value = '3'; 

    var input3 = document.createElement("input");
    input3.type = 'text';
    input3.className = 'optionInput';
    input3.setAttribute('maxlength', '40');
    input3.setAttribute('placeholder', "옵션 추가 또는 '기타' 추가");
    // input3.setAttribute('onfocus', 'this.placeholder=""');

    input3.onfocus = addOption;
    input3.setAttribute('onblur', 'this.placeholder="옵션 추가 또는 \'기타\' 추가"');

    var xbtn = document.createElement("button");
    xbtn.id = 'xButton';
    xbtn.type = 'button';
    xbtn.onclick = function() {
        //xbtn 누르면 xbtn의 부모 div remove.
        var parent = this.parentNode;
        parent.remove();            
        
    };
    var ximage = document.createElement("img");
    ximage.setAttribute('src', '../image/Group 16.png');
    ximage.setAttribute('width', '50%');

    div3.appendChild(input2);
    div3.appendChild(input3);
    div1.appendChild(div3);
    xbtn.appendChild(ximage);
    div3.appendChild(xbtn);

    //Qdelete
    var div4 = document.createElement("div");
    div4.className = 'Qdelete';

    var tbtn = document.createElement("button");
    tbtn.id = 'trash';
    tbtn.type = 'button';
    tbtn.onclick = function() {
        div1.remove();
        
        var rank = 1;
        var surveyElements = document.getElementById("surveyElements");
        for (var i=0; i<surveyElements.children.length; i++) {
            var surveyElement = surveyElements.children[i];
            var question = surveyElement.firstChild;
            var Qnum = question.firstChild;
            Qnum.innerHTML = rank + ".";
            rank++;
        }
    };

    var timage = document.createElement("img");
    timage.setAttribute('src', '../image/Trash can.png');
    timage.setAttribute('width', '50%');

    div1.appendChild(div4);
    tbtn.appendChild(timage);
    div4.appendChild(tbtn);
    
}