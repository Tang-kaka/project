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
 * login区域
 */
$('#main').on('click', '.h2', function () {
    $(this).css('color', '#c9192e').parent().siblings().find('h2').css('color', '#666666')
    $(this).css('border-bottom', '1px solid #c9192e').parent().siblings().find('h2').css('border-bottom', '1px solid #d2d2d2')
    $('.iphone').show()
    $('.username').hide()
})
$('#main').on('click', '.h22', function () {
    $(this).css('color', '#c9192e').parent().siblings().find('h2').css('color', '#666666')
    $(this).css('border-bottom', '1px solid #c9192e').parent().siblings().find('h2').css('border-bottom', '1px solid #d2d2d2')
    $('.iphone').hide()
    $('.username').show()
})
$('#main').on('mouseenter', '.denglu', function () {
    $(this).css('background', 'black')
})
$('#main').on('mouseleave', '.denglu', function () {
    $(this).css('background', '')
})

/**
 * 登录接口
 */
$('.denglu').on('click', function () {
    setCookie("username", $('#username').val(), 10)
    setCookie("userpass", $('#userpass').val(), 10)
    login()
})
function login() {
    $.post(
        "./goodsAndShoppingCart/login.php",
        {
            username: $('#username').val(),
            userpass: $('#userpass').val()
        },
        function (data) {
            console.log(data);
            if (data.includes("success")) {
                if (confirm('登陆成功，是否跳转到首页') == true) {
                    location.href = 'index.html'
                }
            } else if (data.includes("fail")) {
                if (confirm('您还未注册,是否跳转到注册界面') == true) {
                    location.href = 'register.html'
                }
            } else {
                alert('这都能错？')
            }
        }
    )
}

//获取cookie
function getCookie(key) {
    // 1. 先获取所有的，存储
    let cookie = document.cookie;// username=zhangsan; password=123456
    let arr = cookie.split("; ");// 分号+空格  ["username=hangsan", "password=123456"]arr
    for (let i = 0; i < arr.length; i++) {
        // arr[0]--->"username=zhangsan"-->['username','zhangsan']
        // arr[1]--->"password=123456"---->['password','123456']
        let arr1 = arr[i].split('=');// arr1[0]---》键(username、password)   arr1[1]---》值

        if (arr1[0] == key) {
            return arr1[1];
        }
    }
    return '';
}

//将用户名密码存在cookie中；
function setCookie(key, value, day) {
    let date = new Date();
    date.setDate(date.getDate() + day)
    document.cookie = key + '=' + value + ';expires=' + date;
}