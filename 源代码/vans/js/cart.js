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
 * 购物车显示接口
 */
$(function () {
    if (getCookie("username") == "") {
        alert('您还未登录，快去登陆吧！')
        location.href = "login.html"
    } else {
        getShoppingCart();
    }
})
function getShoppingCart() {
    $.get("./goodsAndShoppingCart/getShoppingCart.php",
        {
            vipName: getCookie("username"),
        },
        function (data) {
            let htmlstr = "";
            let totalMoney = 0;
            data.forEach(goods => {
                totalMoney += goods.goodsPrice * goods.goodsCount;
                htmlstr += `
                    <tr height="141px">
                        <td width="65px">
                        <input type="radio" name="" id="">
                        ${goods.goodsId}
                        </td>
                        <td>
                            <a href="#">
                                <img src="${goods.goodsImg}"
                                alt="">
                            </a>
                        </td>
                        <td colspan="2">
                            <a href="#"><span>${goods.goodsName}</span></a><br>
                            <span>彩色/120M/鞋内长18cm</span><br>
                            <a href="#"><span>编辑</span></a>
                        </td>
                        <td>
                            <input type="button" value=" - " onclick="reduceCount(this,'${goods.goodsId}')">
                            <input type="text" value="${goods.goodsCount}" size="1">
                            <input type="button" value=" + " onclick="addCount(this,'${goods.goodsId}')">
                        </td>
                        <td>￥${goods.goodsPrice}</td>
                        <td>￥0.00</td>
                        <td class="xiaoji">￥${goods.goodsPrice * goods.goodsCount}</td>
                        <td onclick="del(this,'${goods.goodsId}')"><a href="#">移入收藏夹/删除</a></td>
                    </tr>
                `;
                $("#tbody").html(htmlstr);
                let htmlstr1 = "";
                htmlstr1 += `
                    <tr height="44px">
                        <td width="65px" colspan="7">&nbsp;&nbsp;运费：包邮</td>
                        <td width="178px">总金额
                        </td>
                        <td width="277px" id="totalMoney">￥${totalMoney}</td>
                    </tr>
                    <tr height="44px">
                        <td colspan="8" class="L"><a href="listpage.html">继续购物</a></td>
                        <td class="R"><a href="#">下单结算</a></td>
                    </tr>
                `;
                $("#tfoot").html(htmlstr1);

            })
            setCookie("cart", JSON.stringify(data), 10)
        },
        "json"
    )
}
/**
 * 修改购物车中商品的数量接口封装
 */
//1.减法
function reduceCount(btn, goodsId) {
    //一、改变数量
    //1.获取原来的数字
    let Count = parseInt(btn.nextElementSibling.value)
    //2.减法运算
    Count--;
    if (Count <= 1) {
        Count = 1;
    }
    //3.修改后端的数量
    $.get("./goodsAndShoppingCart/updateGoodsCount.php",
        {
            vipName: getCookie('username'),
            goodsId: goodsId,
            goodsCount: Count
        },
        function (data) {
            if (data.includes("1")) {
                //4.修改前端的数量（把数量赋给dom）
                btn.nextElementSibling.value = Count;
                //二、修改小计
                let price = parseInt(btn.parentNode.nextElementSibling.innerHTML.substring(1))
                let xiaoJi = price * Count;
                btn.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "￥" + xiaoJi;
                //三、修改合计
                totalMoneyFn()
            }
        }
    )
}
//2.加法运算
function addCount(btn, goodsId) {
    //一、改变数量
    //1.获取原来的数字
    let Count = parseInt(btn.previousElementSibling.value)
    //2.加法运算
    Count++;
    //3.修改后端的数量
    $.get("./goodsAndShoppingCart/updateGoodsCount.php",
        {
            vipName: getCookie('username'),
            goodsId: goodsId,
            goodsCount: Count
        },
        function (data) {
            if (data.includes("1")) {
                //4.修改前端的数量（把数量赋给dom）
                btn.previousElementSibling.value = Count;
                //二、修改小计
                let price = parseInt(btn.parentNode.nextElementSibling.innerHTML.substring(1))
                let xiaoJi = price * Count;
                btn.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "￥" + xiaoJi;
                //三、修改合计
                totalMoneyFn()
            }
        }
    )
}
//封装计算合计
function totalMoneyFn() {
    let totalMoney = 0;
    let oXj = $('.xiaoji');
    for (let i = 0; i < oXj.length; i++) {
        totalMoney += parseInt(oXj[i].innerHTML.substring(1))
    }
    $("#totalMoney").html("￥" + totalMoney)
}
/**
 * 删除购物车中的商品接口封装
 */
//删除功能
function del(td, goodsId) {
    if (confirm('您确定要删除吗？') == false) {
        return;
    }
    $.get("./goodsAndShoppingCart/deleteGoods.php",
        {
            vipName: getCookie('username'),
            goodsId: goodsId
        },
        function (data) {
            if (data.includes("1")) {
                //后端删除成功，在删除前端数据
                td.parentNode.remove();
                totalMoneyFn()
            }
        }
    )
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