/**
 * 
 * 头部导航栏
 */
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
 * 放大镜效果
 */
//1.鼠标移入事件
$("#box").on('mouseover', '#smallbox', function () {
    $(this).find("#mask").show()
    $(this).siblings('#bigbox').show()
})
//2.鼠标移动，遮罩层移动
$("#box").on('mousemove', '#smallbox', function (ev) {
    let evt = ev || event;
    //2.1鼠标的位置
    let x = evt.clientX - $('#smallbox').offset().left - $('#mask').outerWidth() / 2;
    let y = evt.clientY - $('#smallbox').offset().top - $('#mask').outerHeight() / 2;
    //2.2边界限制
    if (x < 0) {
        x = 0;
    }
    if (x >= $("#smallbox").outerWidth() - $("#mask").outerWidth()) {
        x = $("#smallbox").outerWidth() - $("#mask").outerWidth()
    }
    if (y < 0) {
        y = 0;
    }
    if (y >= $("#smallbox").outerHeight() - $("#mask").outerHeight()) {
        y = $("#smallbox").outerHeight() - $("#mask").outerHeight()
    }
    //2.3将坐标设置给遮罩层
    $('#mask').css('left', x)
    $('#mask').css('top', y)
    //2.4大图移动
    //先算比率
    let bilix = ($('#bigbox>img').outerWidth() - $("#bigbox").innerWidth()) / ($("#smallbox").innerWidth() - $("#mask").outerWidth())
    let biliy = ($('#bigbox>img').outerHeight() - $("#bigbox").innerHeight()) / ($("#smallbox").innerHeight() - $('#mask').outerHeight())
    let bigx = bilix * $("#mask").position().left
    let bigy = biliy * $("#mask").position().top
    // console.log(bigx, bigy);
    $("#bigbox>img").css('left', -bigx)
    $("#bigbox>img").css('top', -bigy)
})
//3.鼠标移出遮罩层消失
$("#box").on('mouseout', '#smallbox', function () {
    $(this).find("#mask").hide()
    $(this).siblings('#bigbox').hide()
})
//4.点击小图切换
// let arr = ["${data.beiyong3}", '${data.beiyong4}', '${data.beiyong5}', '${data.beiyong6}', '${data.beiyong7}']
// let arr1 = ['${data.beiyong3}', '${data.beiyong4}', '${data.beiyong5}', '${data.beiyong6}', '${data.beiyong7}']
// console.log(arr, arr1);
$("#box").on('click', '.tab1', function () {
    $(this).find('#img').addClass('current').parent().siblings('.tab1').find('#img').removeClass()
    $(this).parent().siblings('#smallbox').find('div').first().html($(this).html())
    $(this).parent().siblings('#bigbox').html($(this).html())

})
/*====尺码选择==== */
$('.title').on('click', '.chima', function () {
    $(this).css('background', 'red').siblings('.chima').css('background', '')
})
/*=====数量加减 */
$('.title').on('click', '.minus', function () {
    let n = $(this).next().val();
    n--;
    if (n < 1) {
        n = 1;
    }
    $(this).next().val(n)
})
$('.title').on('click', '.add', function () {
    let m = $(this).prev().val();
    m++;
    $(this).prev().val(m)
})
/**
 * 1.商品详情页接口(根据商品编号获取商品详情)
 * 2.添加到购物车接口
 * 备用一：放大镜小图
 * 备用二：放大镜大图
 * 备用三：tab1
 * 备用四：tab2
 * 备用五：tab3
 * 备用六：tab4
 * 备用七：tab5
 * ---商品详细资料---
 * 备用八：商品名字背景图
 * 备用九：产品细节图
 * 备用十：产品详情图
 */
$(function () {
    //1.获取商品的编号
    // console.log("location",location);
    //解构赋值，将goodsId赋值01001
    let [, goodsId] = location.search.substring(1).split("=");//"goodsId=01003"从1截取，去掉问号。split分割为数组
    // console.log("goodsId",goodsId);

    //2.根据商品编号，获取商品详情
    getGoodsInfo(goodsId);

    //3.加入购物车
    $('.title').on("click", '.five1', function () {
        // console.log("$('.five1')", $(".five1"));
        if (getCookie("username") == "") {
            if (confirm("您还未登录，是否跳转到登录界面") == true) {
                location.href = "login.html"
            }
            else {
                return;
            }
        } else {
            addShoppingCart(goodsId)
        }
    });
})
/*
*  =======添加到购物车接口封装========
*/
function addShoppingCart(goodsId) {
    $.post("./goodsAndShoppingCart/addShoppingCart.php",
        {
            vipName: getCookie('username'),
            goodsId: goodsId,
            goodsCount: $("#goodsCount").val()
        },
        function (data) {
            if (data.includes('1')) {
                if (confirm('添加成功，是否进入购物车') == true) {
                    location.href = "cart.html"
                } else {
                    return
                }
            } else if (data.includes('0')) {
                alert("添加失败")
            } else {
                alert("这都能弹出来？出错了！")
            }
        }
    )
}

/*
*  =======根据商品编号获得商品详情接口封装========
*/
function getGoodsInfo(goodsId) {
    $.get("./goodsAndShoppingCart/getGoodsInfo.php", { goodsId: goodsId }, function (data) {
        // console.log("data",data);
        // 1.放大镜左侧图片
        let htmlstr = `
                <div id="smallbox">
                    <div><img src="${data.beiyong1}"
                        alt=""></div>
                    <div id="mask"></div>
                </div>
                <div id="bigbox">
                    <img src="${data.beiyong2}"
                        alt="">
                </div>
                <div id="tab">
                    <div class="tab1">
                    <img src="${data.beiyong3}"alt="" index='0' id="img" class="current">
                    </div>
                    <div class="tab1"><img src="${data.beiyong4}"
                        alt="" index='1' id="img"> </div>
                    <div class="tab1"><img src="${data.beiyong5}"
                        alt="" index="2" id="img"> </div>
                    <div class="tab1"><img src="${data.beiyong6}"
                        alt="" index="3" id="img"> </div>
                    <div class="tab1"><img src="${data.beiyong7}"
                        alt="" index="4" id="img"> </div>
                </div> 
        `;
        $('#box').html(htmlstr);
        //2.右侧信息
        let htmlstr1 = `
            <h2>${data.goodsName}</h2>
            <ul class="one">
                <li>￥${data.goodsPrice}</li>
                <li>
                    <em>送赠品</em>
                    <span>会员单笔实付金额满1100赠送Vans Family折叠雨伞</span>
                </li>
            </ul>
            <ul class="two">
                <li>选择颜色：灰色</li>
                <img src="${data.goodsImg}" alt="">
            </ul>
        `;
        //修改原图
        $('.title').html(htmlstr1 + $('.title').html());
        //修改放大图
        // $("#bigbox img").attr("src",data.goodsImg)
        //3.详细信息
        let htmlstr2 = `
            <img src="${data.beiyong8}"
                    alt="">
            <img src="${data.beiyong9}"
                    alt="">
            <img src="https://img1.vans.com.cn/public/images/16/76/9e/14074ce8ef483a92ee7a7c5d3be1a9ef868761cb.jpg?1621406004#w"
                    alt="">
            <img src="${data.beiyong10}"
                    alt="">
            <img src="https://img1.vans.com.cn/public/images/c9/b9/90/42e281c5b98e1a2cc5cb7b0cb561e8d6b5eccc47.jpg?1621405421#w"
                    alt="">
            <img src="https://img2.vans.com.cn/public/images/43/34/89/f9373278fcd7f88dc8cd06f8141485d11727c449.jpg?1496401876#w"
                    alt="">
        `;
        $('.twopic').html(htmlstr2);
    }, "json")
}

/**
 * cookie
 */
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