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
 * 商品列表页接口（获得某种商品类型的所有商品）
 */
//页面一打开，就获取商品的数据
$(function () {
    //1.获取商品列表的数据
    getGoodsList();
})

//接口封装
function getGoodsList() {
    $.get("./goodsAndShoppingCart/getGoodsList.php", function (data) {
        // console.log("data", data);
        let htmlstr = '';
        for (let i = 0; i < data.length; i++) {
            htmlstr += `
            <a href="fangdajing.html?goodsId=${data[i].goodsId}">
                <li>
                    <div class="img">
                        <img src="${data[i].goodsImg}"
                            alt="">
                    </div>
                    <div class="price">
                        <h3>${data[i].goodsName}</h3>
                        <div>￥${data[i].goodsPrice}</div>
                    </div>
                </li>
            </a>    
            `;
        }
        $('#list').html(htmlstr)
    }, "json");
}