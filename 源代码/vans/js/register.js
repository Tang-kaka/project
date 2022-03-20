/** 
 * 头部区域
 * */
$('.top').on('mouseenter', 'span', function () {
    $(this).css('color', '#d6000f')
    $(this).find('a').css('color', '#d6000f')
})
$('.top').on('mouseleave', 'span', function () {
    $(this).css('color', '')
    $(this).find('a').css('color', '')
})

/**
 * 导航nav区域
 */
//粘性定位
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 48) {
        $(".nav>.img").find('img').css({
            'height': '36px', 'position': 'relative', 'top': '-23px', 'margin-top': '38px'
        })
    }
    if ($(window).scrollTop() <= 48) {
        $(".nav>.img").find('img').css({
            'height': '130px', 'margin-top': '-57px', 'top': '1px'
        })
    }
})
//输入框
$('.input1').on('mouseenter', function () {
    $('.input1').find('span').css('color', '#d6000f')
})
$('.input1').on('mouseleave', function () {
    $('.input1').find('span').css('color', '')
    // $('.input1').prev().find('li').find('a').css('color', '')
})
//导航栏
/*< !-- ==========二级菜单 ========== -->*/
$('.nav').on('mouseenter', 'li', function () {
    $(this).find('a').css('color', '#d6000f').parent().siblings().find('a').css('color', '')
    $(this).find('.secondlist').find('.big').show()
    $(this).find('.secondlist').find('.small').show()
})
$('.nav').on('mouseleave', 'li', function () {
    $(this).find('a').css('color', '')
    $(this).find('.secondlist').find('.big').hide()
    $(this).find('.secondlist').find('.small').hide()
})
/**
 * 固定定位
 */
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 48) {
        $('#fixed>.last').show()
    }
    if ($(window).scrollTop() <= 48) {
        $('#fixed>.last').hide()
    }
})
/**
 * main
 *register区域
 */
$('#main').on('mouseenter', '.denglu', function () {
    $(this).css('background', 'black')
})
$('#main').on('mouseleave', '.denglu', function () {
    $(this).css('background', '')
})

/** 
 * 注册区域
*/
//1.姓名判断
var oName = document.querySelector('.username')
var oTin = document.querySelector('.tin')
oName.onblur = function () {
    var regName = /^\w{6,10}$/
    var str = oName.value
    if (regName.test(str)) {
        oTin.innerHTML = ''
    }
    else {
        oTin.innerHTML = '用户名格式错误，请重新输入'
        return false;
    }
}
// 2.密码判断
var oPwd = document.querySelector('.password')
var oTip1 = document.querySelector('.tin1')
oPwd.onblur = function () {
    var regpwd = /^\w{6,10}$/
    var str = oPwd.value
    if (regpwd.test(str)) {
        oTip1.innerHTML = ''
    }
    else {
        oTip1.innerHTML = '密码格式错误，请重新输入'
        return false;
    }
}
// 3.手机号判断
var oTel = document.querySelector('.phonenumber')
var oTit = document.querySelector('.tin3')
oTel.onblur = function () {
    var regTel = /\d{11}/
    var str = oTel.value
    if (regTel.test(str)) {
        oTit.innerHTML = ''
    }
    else {
        oTit.innerHTML = '手机号码格式错误，请重新输入'
        return false;
    }
}
/*注册事件*/
// 1.验证用户名是否存在
$('.username').on('blur', function () {
    $.get(
        "./goodsAndShoppingCart/checkUser.php",
        {
            username: $('#username').val()
        },
        function (data) {
            if (oTin.innerHTML == '' & oTip1.innerHTML == '') {
                if (data.includes('0')) {
                    alert('该用户名已存在')
                } else if (data.includes('1')) {
                    //2.点击注册
                    $('.register').on('click', function () {
                        register()
                    })
                }
            } else {
                alert('请确认格式是否正确')
            }
        }

    )
})

function register() {
    $.post(
        "./goodsAndShoppingCart/addUser.php",
        {
            username: $('#username').val(),
            userpass: $('#userpass').val()
        },
        function (data) {
            console.log(data);
            if (data.includes("success")) {
                confirm('注册成功，是否跳转到登录界面')
                location.href = './login.html'
            } else if (data.includes("fail")) {
                alert('注册失败');
            } else {
                alert('这都能失败？')
            }
        }
    )
}


