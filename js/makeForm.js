var count = 0;
function addQuestion() {
    //surveyElement
    var div1 = document.createElement("div");
    div1.className = 'surveyElement';

    //question
    var div2 = document.createElement("div")
    div2.className = 'question';

    var num = document.createElement("span");
    num.className = 'Qnum';
    //var numText = document.createTextNode('1.');
    num.textContent = ++count + ".";

    var input1 = document.createElement("input");
    input1.className = 'Qinput';
    input1.setAttribute('maxlength', '40');
    input1.setAttribute('placeholder', '질문을 입력해주세요.');
    input1.setAttribute('onfocus', 'this.placeholder=""');
    input1.setAttribute('onblur', 'this.placeholder="질문을 입력해주세요."');

    var type = document.createElement("select");
    type.className = 'Qtype';

    var typeOption1 = document.createElement("option");
    typeOption1.value = 1;
    var optionText1 = document.createTextNode('객관식 질문');
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

    //makeOption
    var div3 = document.createElement("div");
        div3.className = 'makeOption';
    
        var input2 = document.createElement("input");
        input2.type = 'radio';
        input2.name = 'checkOption';
        input2.value = '1';
    
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
        input2.name = 'checkOption';
        input2.value = '2';
    
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
        input2.name = 'checkOption';
        input2.value = '3'; //
    
        var input3 = document.createElement("input");
        input3.type = 'text';
        input3.className = 'optionInput';
        input3.setAttribute('maxlength', '40');
        input3.setAttribute('placeholder', "옵션 추가 또는 '기타' 추가");
        input3.setAttribute('onfocus', 'this.placeholder=""');
        input3.setAttribute('onblur', 'this.placeholder="옵션 추가 또는 \'기타\' 추가"');
    
        var xbtn = document.createElement("button");
        xbtn.id = 'xButton';
        xbtn.type = 'button';
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

            //count = 0;
            //var elements = document.getElementsByClassName("surveyElement");
            //while(elements.hasChildNodes()) {
            //    num.textContent = ++count + ".";
            //}

            for (var i=0; i<surveyElements.childNodes.length; i++) {
                if (surveyElements.childNodes[i].nodeName.toLowerCase() == "div") {
                    
                }

            }
        };
        var timage = document.createElement("img");
        timage.setAttribute('src', '../image/Trash can.png');
        timage.setAttribute('width', '50%');

        div1.appendChild(div4);
        tbtn.appendChild(timage);
        div4.appendChild(tbtn);
    
}