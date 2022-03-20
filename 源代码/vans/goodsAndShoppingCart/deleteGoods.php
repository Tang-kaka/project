<?php
	include("./header.php");
	include("./conndb.php");
	
	//1、接受客户端的数据（用户输入的数据）
	$vipName   = $_REQUEST['vipName'];
	$goodsId   = $_REQUEST['goodsId'];
	
	//2、数据保存在数据库中
	
	//3）、传输数据（过桥）
	$sqlstr = "delete from  shoppingCart where vipName='".$vipName."' and goodsId='".$goodsId."'";
    $result=mysqli_query($conn,$sqlstr);	
   
	if(!$result){
		die("删除SQL语句执行失败".mysqli_error());
		echo 0; //1：表示删除成功，0：表示删除失败。
	}	
	//4）、关闭连接（拆桥）
	mysqli_close($conn);
	
	//3、给客户端返回（响应）！
	
	if(!$result){
		echo 0;
	}else{
		echo 1;
	}	
	
?>