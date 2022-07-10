function id_overlap_check() {

    $('.username_input').change(function () {
    $('#id_check_sucess').hide();
    $('.id_overlap_button').show();
    /* 중복확인했더라도 다시 아이디 변경했을 때, 제출 못하게 막는다 */
    $('.username_input').attr("check_result", "fail");
    })

    /* 아이디 입력 되지 않으면 오류 알람*/
    if ($('.username_input').val() == '') {
    alert('아이디를 입력해주세요.')
    return;
    }

    /* 아이디 중복체크 되지 않으면 오류 알람*/
    if ($('.username_input').attr("check_result") == "fail"){
        alert("아이디 중복체크를 해주시기 바랍니다.");
        $('.username_input').focus();
        return false;
    }

    /* 해당 url 로 data 를 넘겨줍니다. 여기서 데이터는 id_overlap_input 에서 가져온 값, 사용자가 아이디 부분에 입력한 값*/
    id_overlap_input = document.querySelector('input[name="username"]');

    $.ajax({
    url: "{% url 'lawyerAccount:id_overlap_check' %}",
    data: {
        'username': id_overlap_input.value
    },
    datatype: 'json',
    success: function (data) {
        console.log(data['overlap']);
        if (data['overlap'] == "fail") {
            alert("이미 존재하는 아이디 입니다.");
            id_overlap_input.focus();
            return;
        } else {
            alert("사용가능한 아이디 입니다.");
            $('.username_input').attr("check_result", "success");
            $('#id_check_sucess').show();
            $('.id_overlap_button').hide();
            return;
        }
    }
    });
}

