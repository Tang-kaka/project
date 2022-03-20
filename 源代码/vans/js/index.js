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
 * 获取所有的商品类型
 */
$(function () {
    $.get("./goodsAndShoppingCart/getGoodsType.php", function (data) {
        let htmlstr = "";
        for (let i = 0; i < data.length; i++) {
            htmlstr += `
                    <a href="listpage.html">
                        <dd>${data[i].goodsType}</dd>
                    </a>
            `;
        }
        // console.log("htmlstr", htmlstr);
        $(".type").html(htmlstr);
    }, "json")
})
/**
 * 首页获取某种商品类型最新的几条商品接口
 */
$(function () {
    // getGoodsListNew();
    $.get("./goodsAndShoppingCart/getGoodsListNew.php", { count: "4" }, function (data) {
        // console.log("data", data);
        let htmlstr = "";
        for (let i = 0; i < data.length; i++) {
            htmlstr += `
             <li>
                    <a href="#">
                        <div class="imgs">
                            <img src="${data[i].goodsImg}"
                                alt="">
                        </div>
                        <span class="y">${data[i].goodsName}</span>
                        <span class="c">${data[i].goodsType}</span>
                    </a>
                </li>
            `;
        }
        // console.log("htmlstr", htmlstr);
        $(".xilie").html(htmlstr);
    }, "json");
})

/**
 * 轮播图接口
 */
$(function () {
    $.get("./goodsAndShoppingCart/bannerGet.php", {}, function (data) {
        // console.log("data", data);
        let htmlstr = "";
        for (let i = 0; i < data.length; i++) {
            htmlstr += `
             <div class="swiper-slide ">
                            <div class="imgs">
                                <a href="${data[i].url}">
                                    <img src="${data[i].img}"
                                        alt="">
                                </a>
                            </div>
                            <div class="date">
                                <a href="#">
                                    12月23日
                                </a>
                            </div>
                            <div class="name">
                                <a href="#">
                                    VANS x HUATUNAN
                                    <br>
                                    虎年联名系列
                                </a>
                            </div>
                            <a href="#">
                                <div class="buy">立即选购</div>
                            </a>
                        </div>
            `;
        }
        // console.log("htmlstr", htmlstr);
        $(".lunbou2").html(htmlstr);
    }, "json");
})