<?php
	include("./header.php");
	include("./conndb.php");
	include("./tools.php");
	
	//1接收数据
	$username = preDo($_POST["username"]);
	$userPass = preDo($_POST["userpass"]);
	
	//2、在数据库中查询

	   //2)、执行SQL语句（查询）
	   $sqlStr="select * from vip where username='$username' and userPass='$userPass'";
	   
	   $result=mysqli_query($conn,$sqlStr);
	   
	   //3)、关闭连接
	   mysqli_close($conn);
	//3、响应结果
	//获得$result的行数
	$rows = mysqli_num_rows($result);
	if($rows>0){//登录成功
		echo "success";	
	}else {//登录失败，返回0.
		echo "fail";
	}	
?>