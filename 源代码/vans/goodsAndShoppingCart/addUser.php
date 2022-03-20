<?php	
	include("./header.php");
	include("./conndb.php");
	include("./tools.php");
	
	//一、接收前端传来的数据
	$username = preDo($_POST["username"]);
	$userpass = preDo($_POST["userpass"]);
	
	//二、保存数据
	
	//2、执行SQL语句
	$sqlStr = "insert into vip(username,userPass)
              values('$username','$userpass')";
	
	$result = mysqli_query($conn,$sqlStr);
	
	//3、关闭数据库
	mysqli_close($conn);
	
	//三、给前端响应
    if($result==1){
		echo "success";//表示注册成功
	}else{
		echo "fail";//表示注册失败
	}

?>