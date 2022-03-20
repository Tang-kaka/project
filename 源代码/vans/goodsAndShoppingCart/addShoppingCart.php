<?php
	//添加到购物车
	include("./header.php");
	include("./conndb.php");
	//1、接受客户端的数据（用户输入的数据）
	$vipName   = $_REQUEST['vipName'];
	$goodsId   = $_REQUEST['goodsId'];
	$goodsCount = $_REQUEST['goodsCount'];
	
	//2、数据保存在数据库中
	
	//3）、传输数据（过桥）
	$sqlstr = "select * from shoppingCart where vipName='$vipName' and goodsId='$goodsId'";
	$result = mysqli_query($conn,$sqlstr);

	//3.1)先查找该商品是否在购物车中存在
	if(mysqli_num_rows($result)>0){
		//如果存在，则使用update语句
		$sqlstr = "update shoppingCart set goodsCount=goodsCount+$goodsCount where vipName='$vipName' and goodsId='$goodsId'";
	}else{
		//如果不存在，则使用insert语句	
		$sqlstr = "insert into shoppingCart values('$vipName','$goodsId','$goodsCount')";		
	}
	
	$result=mysqli_query($conn,$sqlstr);	
	//4）、关闭连接（拆桥）
	mysqli_close($conn);
	
	if(!$result){
		die("添加失败".mysqli_error());
	}	
	
	//3、给客户端返回（响应） 1：表示添加成功 0：表示添加失败
	if($result>0){
		echo 1;	
	}else{
		echo 0;
	}
?>