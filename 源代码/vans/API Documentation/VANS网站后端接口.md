# VANS网站后端接口

## 一、后端接口环境

​    apache：2.4.39

​    php：7.4.3nts

​    mysql：5.7.26

## 二、开发步骤

1. 建库，建表
   1. 建库：根据自己的项目建立数据库
   2. 建表：把文件“电子商务数据库.sql”的代码在mysql执行一下，完成建表。
2. 修改数据库连接的用户名，密码，库名
   1. 把goodsAndShoppingCart文件夹下的内容拷贝到项目里。（本项目已拷贝）
   2. 把文件夹“goodsAndShoppingCart/conndb.php”文件里的数据库连接的用户名，密码，库名进行修改
3. 添加商品类型：
   1.   打开“addGoodsType.html”文件添加商品类型。
4. 添加商品：
   1. 打开“addGoods.html”文件添加商品。
5. 开发功能：
   1. 依据接口文档“VANS网站后端接口.md”，进行功能开发。

## 三、后端接口描述

### 1、验证用户名是否存在(注册页面)

**url:** 

   checkUser.php

**请求方式：**

   get

**请求参数：**

| 名称（注意大小写） | 是否必须 | 类型   | 描述             |
| ------------------ | -------- | ------ | ---------------- |
| username           | 是       | String | 需要验证的用户名 |

 

**返回内容:**

​	0：表示用户名存在

​	1：表示用户名不存在



### 2、注册（注册页面）  

**url:** 

   addUser.php

**请求方式：**

   post

**请求参数：** 

| 名称（注意大小写） | 是否必须 | 类型   | 描述   |
| ------------------ | -------- | ------ | ------ |
| username           | 是       | String | 用户名 |
| userpass           | 是       | String | 密码   |

**返回内容:**

​	success：表示注册成功

​	fail：表示注册失败



### 3、登录（登录页面，或者首页）  

**url:** 

   login.php

**请求方式：**

   post

**参数：** 

| 名称（注意大小写） | 是否必须 | 类型   | 描述   |
| ------------------ | -------- | ------ | ------ |
| username           | 是       | String | 用户名 |
| userpass           | 是       | String | 密码   |

**返回内容:**

​	success：表示登录成功

​	fail：表示登录失败



### 4、获取所有的商品类型

**url:** 

​          getGoodsType.php

**请求方式：**

​         get

**参数：** 

​        无

**返回内容：**

```js
[
    {
        "typeId":"001",
        "goodsType":"鞋"
	},
    { 
        "typeId":"002",
        "goodsType":"衣服"
	}
]
```



### 5、获得某种商品类型的所有商品（商品列表页面）

**url:** 

​          getGoodsList.php

**请求方式：**

​         get

**参数：** 

| 名称（注意大小写） | 是否必须 | 类型   | 描述                                           |
| ------------------ | -------- | ------ | ---------------------------------------------- |
| typeId             | 否       | String | 商品类型编号，如果不传参，则表示所有类型的商品 |

**返回内容：**

```js
[
	{
			'goodsId': '01001',
			'goodsName': '李宁牌运动鞋',
			'goodsType': '运动鞋',
			'goodsPrice': '350',
			'goodsCount': '0',
			'goodsDesc': '',
			'goodsImg': '',
			'beiyong1': '',
			'beiyong2': '',
			'beiyong3': '',
			'beiyong4': '',
			'beiyong5': '',
			'beiyong6': '',
			'beiyong7': '',
			'beiyong8': '',
			'beiyong9': '',
			'beiyong10': '',
			'beiyong11': '',
			'beiyong12': '',
			'beiyong13': ''
		}
		,
		{
			'goodsId': '01002',
			'goodsName': '耐克',
			'goodsType': '运动',
			'goodsPrice': '400',
			'goodsCount': '0',
			'goodsDesc': '',
			'goodsImg': '',
			'beiyong1': '',
			'beiyong2': '',
			'beiyong3': '',
			'beiyong4': '',
			'beiyong5': '',
			'beiyong6': '',
			'beiyong7': '',
			'beiyong8': '',
			'beiyong9': '',
			'beiyong10': '',
			'beiyong11': '',
			'beiyong12': '',
			'beiyong13': ''
		}
	]
```



**jQuery示例：**

```js
$.get(“getGoodsList.php”,{“typeId”,001},function(data){
	
});
```



### 6、获取某种商品类型最新的几条商品（首页）

**url:**

​     getGoodsListNew.php

**请求方式：**

​    get

**参数：** 

| 名称（注意大小写） | 是否必须 | 类型   | 描述                                         |
| ------------------ | -------- | ------ | -------------------------------------------- |
| typeId             | 否       | String | 商品类型编号，如果不传，则表示所有类型的商品 |
| count              | 是       | 数字   | 最新几条                                     |

**返回内容：**

```js
[
	{
			'goodsId': '01001',
			'goodsName': '李宁牌运动鞋',
			'goodsType': '运动鞋',
			'goodsPrice': '350',
			'goodsCount': '0',
			'goodsDesc': '',
			'goodsImg': '',
			'beiyong1': '',
			'beiyong2': '',
			'beiyong3': '',
			'beiyong4': '',
			'beiyong5': '',
			'beiyong6': '',
			'beiyong7': '',
			'beiyong8': '',
			'beiyong9': '',
			'beiyong10': '',
			'beiyong11': '',
			'beiyong12': '',
			'beiyong13': ''
		}
		,
		{
			'goodsId': '01002',
			'goodsName': '耐克',
			'goodsType': '运动',
			'goodsPrice': '400',
			'goodsCount': '0',
			'goodsDesc': '',
			'goodsImg': '',
			'beiyong1': '',
			'beiyong2': '',
			'beiyong3': '',
			'beiyong4': '',
			'beiyong5': '',
			'beiyong6': '',
			'beiyong7': '',
			'beiyong8': '',
			'beiyong9': '',
			'beiyong10': '',
			'beiyong11': '',
			'beiyong12': '',
			'beiyong13': ''
		}
	]
```



### 7、根据商品编号获得商品详情（商品详情页面）



**url:** 

​     getGoodsInfo.php

**请求方式：**

​    get

**参数：** 

| 名称（注意大小写） | 是否必须 | 类型   | 描述     |
| ------------------ | -------- | ------ | -------- |
| goodsId            | 是       | String | 商品编号 |

**返回内容：**

```js
{
			'goodsId': '01001',
			'goodsName': '李宁牌运动鞋',
			'goodsType': '运动鞋',
			'goodsPrice': '350',
			'goodsCount': '0',
			'goodsDesc': '',
			'goodsImg': '',
			'beiyong1': '',
			'beiyong2': '',
			'beiyong3': '',
			'beiyong4': '',
			'beiyong5': '',
			'beiyong6': '',
			'beiyong7': '',
			'beiyong8': '',
			'beiyong9': '',
			'beiyong10': '',
			'beiyong11': '',
			'beiyong12': '',
			'beiyong13': ''
}
		
```



### 8、添加到购物车

**url:**

​    addShoppingCart.php

**请求方式：**

​    POST

**参数：** 

| 名称（注意大小写） | 是否必须 | 类型   | 描述     |
| ------------------ | -------- | ------ | -------- |
| vipName            | 是       | String | 用户名   |
| goodsId            | 是       | String | 商品编号 |
| goodsCount         | 是       | String | 商品数量 |



**返回内容:**

​	1：表示添加成功

​	0：表示添加失败



### 9、显示购物车（购物车列表）

**url:** 

​    getShoppingCart.php

**请求方式：**

​     get

**参数：** 

| 名称（注意大小写） | 是否必须 | 类型   | 描述   |
| ------------------ | -------- | ------ | ------ |
| vipName            | 是       | String | 用户名 |

**返回内容:**

```js
[
		{
			'goodsId': '01001',
			'goodsName': '李宁牌运动鞋',
			'goodsType': '运动鞋',
			'goodsPrice': '350',
			'goodsCount': '0',
			'goodsDesc': '',
			'goodsImg': '',
			'beiyong1': '',
			'beiyong2': '',
			'beiyong3': '',
			'beiyong4': '',
			'beiyong5': '',
			'beiyong6': '',
			'beiyong7': '',
			'beiyong8': '',
			'beiyong9': '',
			'beiyong10': '',
			'beiyong11': '',
			'beiyong12': '',
			'beiyong13': ''
		}
	]
```



### 10、删除购物车的商品

**url:** 

​    deleteGoods.php

**请求方式：**

​     get

**参数：** 

| 名称（注意大小写） | 是否必须 | 类型   | 描述             |
| ------------------ | -------- | ------ | ---------------- |
| vipName            | 是       | String | 用户名           |
| goodsId            | 是       | String | 被删除商品的编号 |

**返回内容:**

  1：表示删除成功

  0：表示删除失败



### 11、修改购物车中商品的数量

**url:** 

​    updateGoodsCount.php

**请求方式：**

​    get



**参数：** 

| 名称（注意大小写） | 是否必须 | 类型    | 描述           |
| ------------------ | -------- | ------- | -------------- |
| vipName            | 是       | String  | 用户名         |
| goodsId            | 是       | String  | 修改商品的编号 |
| goodsCount         | 是       | Integer | 修改后的数量   |

**返回内容:**

​	1：表示修改成功

​	0：表示修改失败



### 12、轮播图接口

#### 1）、首先打开banner.html文件，添加轮播图的数据

#### 2）、获取轮播图的数据

**url:** 

​	bannerGet.php

**请求方式：**

   get

**参数：**

​    无

**返回内容:**

```json
[
    { 
        "id":"1",
        "img":"img/01.jpg",
        "url":"https://www.baidu.com2222"
    },
    {
		"id":"2",
        "img":"img/02.jpg",
        "url":"https://www.1000phone222.com"
    }
]
```



## 四、还可以自行增加的接口

### 1、添加商品评论

**url:** 

   addComment.php

**请求方式：**

​    post

**参数：** 

| 名称（注意大小写） | 是否必须 | 类型   | 描述       |
| ------------------ | -------- | ------ | ---------- |
| vipName            | 是       | String | 用户名     |
| goodsId            | 是       | String | 商品的编号 |
| content            | 是       | String | 评论内容   |

**返回内容:**

​	success：表示添加成功

​	fail：表示添加失败



### 2、获取商品评论列表

**url:** 

​	getComment.php

**请求方式：**

   get

**参数：** 

| 名称（注意大小写） | 是否必须 | 类型    | 描述       |
| ------------------ | -------- | ------- | ---------- |
| goodsId            | 是       | String  | 商品的编号 |
| pageCount          | 是       | Integer | 每页的条数 |
| pageIndex          | 是       | Integer | 页码       |


**返回内容:**

```json
{
    "status":"success",//表示成功拿到数据
    "count":"20",//评论的总条数
    "data":[
            { 
                "id":"9",
                "goodsId":"01001",
                "vipName":"baobao",
                "commentTime":"2021-04-15 17:20:35",
                "content":"这个商品真好，外观好，用着方便"
            },
            {
                "id":"10",
                "goodsId":"01001",
                "vipName":"baobao",
                "commentTime":"2021-04-15 17:20:39",
                "content":"这个商品真好，外观好，用着方便"
            }
        ]
}
```

