<?php
	include("./header.php");
	include("./conndb.php");
	//1、接受客户端的数据（用户输入的数据）
	$vipName   = $_REQUEST['vipName'];
	$goodsId   = $_REQUEST['goodsId'];
	$goodsCount = $_REQUEST['goodsCount'];
	
	//2、数据保存在数据库中
	
	//3）、传输数据（过桥）
	$sqlstr = "update shoppingCart set goodsCount='".$goodsCount."' where vipName='".$vipName."' and goodsId='".$goodsId."'";
	//echo($sqlstr);
	
	if(!mysqli_query($conn,$sqlstr)){
		die("执行更新SQL语句失败".mysqli_error());
		echo "0";
	}
	
	//4）、关闭连接（拆桥）
	mysqli_close($conn);
	
	//3、给客户端返回（响应）一个注册成功！
	echo 1; //1：表示修改成功,0：表示修改失败
?>